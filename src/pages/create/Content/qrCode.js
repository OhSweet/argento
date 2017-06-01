import React, { Component } from 'react'

import {
	View,
	StyleSheet,
	Text,
	CameraRoll,
	TextInput,
	Image,
	ToastAndroid
} from 'react-native'

import { Button, Divider, Icon, Checkbox } from "react-native-material-ui"
import RNFS from "react-native-fs"
import QRCode from 'react-native-qrcode-svg'

import styles from "../styles.js"

class QRCodeContent extends Component {
	constructor( props ) {
		super( props )
		this.state = {
			busy: false,
			imageUrl: 'http://orig13.deviantart.net/28ee/f/2011/343/4/2/kararity_animated_gif_by_kyrospawn-d4aw29x.gif'
		}
	}

	completeData( ) {
		this.setState({ submitted: true })

		this
			.props
			.onContentInfoComplete({ content: this.state.imageUrl, title: null, type: 'image' })
			.then(( ) => {
				ToastAndroid.show( 'Saved to remote..in the future must make this redirect to my fragments !', ToastAndroid.SHORT )
			})
	}

	isValidData( ) {
		return this.state.imageSaved
	}

	saveQrToDisk( ) {
		this.setState({ busy: true })

		this
			.svg
			.toDataURL(( data ) => {

				RNFS
					.writeFile( RNFS.CachesDirectoryPath + "/the_other_side.png", data, 'base64' )
					.then(( success ) => {
						return CameraRoll.saveToCameraRoll( RNFS.CachesDirectoryPath + "/the_other_side.png", 'photo' )
					})
					.then(( ) => {
						this.setState({ busy: false, imageSaved: true })
						ToastAndroid.show( 'Saved to gallery !!', ToastAndroid.SHORT )
					})
					.catch(( err ) => {
						console.warn( err.message );
					});

			})
	}

	render( ) {
		return (

			<View>
				<View style={styles.padding30}>
					<Icon name="face" style={styles.iconStyle}/>

					<Text style={styles.heading}>
						Enter your image or gif url
					</Text>

					<TextInput style={styles.serifThin} maxLength={25} placeholder={this.state.imageUrl} onChangeText={( temporaryImageUrl ) => this.setState({ temporaryImageUrl })}>
						{this.state.title}
					</TextInput>

					<Button primary text="Preview" upperCase={false} onPress={( ) => this.setState({ imageUrl: this.state.temporaryImageUrl })} disabled={!this.state.temporaryImageUrl}></Button>

				</View>

				<View style={styles.padding30}>
					<View style={styles.flexBoth}>
						<View>
							<Text>
								Generated QR
							</Text>
							<QRCode style={styles.imagesSizes} getRef={( c ) => ( this.svg = c )} value={this.state.imageUrl}/>
						</View>
						<View>
							<Text>
								Image preview
							</Text>
							<Image style={styles.imagesSizes} source={{
								uri: this.state.imageUrl
							}}/>
						</View>

					</View>

				</View>
				<Divider/>

				<View>
					<Button
						primary
						text={this.state.busy
						? ( 'Saving ...' )
						: ( "Save QR to gallery for printing" )}
						upperCase={false}
						onPress={this
						.saveQrToDisk
						.bind( this )}></Button>
				</View>
				<Divider/>
				<View style={styles.padding30}>
					<Button
						raised
						primary
						text={this.state.submitted
						? ( 'Saving..' )
						: ( 'Post' )}
						upperCase={false}
						onPress={this
						.completeData
						.bind( this )}
						disabled={!this.isValidData( )}></Button>
				</View>

			</View>

		)
	}
}

export default QRCodeContent
