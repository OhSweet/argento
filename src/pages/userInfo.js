import React, { Component } from 'react';

import {
	Text,
	View,
	Navigator,
	TouchableHighlight,
	StyleSheet,
	TextInput,
	Dimensions,
	Image,
	Button
} from 'react-native';

import Camera from "react-native-camera";

class UserInfo extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			parsedUrl: null,
			bounds: {
				origin: {
					x: 0,
					y: 0
				},
				size: {
					height: 0,
					width: 0
				}
			},
			opacity: 0
		};
	}

	render( ) {
		//tb sa am ceva ce sa returneze altfel navigatorul pune null. si da eroare aplicatia
		return (
			<View style={styles.container}>
				<Camera
					onBarCodeRead={this.readQR.bind( this )}
					ref={( cam ) => {
					this.camera = cam;
				}}
					style={styles.preview}
					aspect={Camera.constants.Aspect.fill}>
				</Camera>

				<Image
					style={{
					opacity: this.state.opacity,
					height: parseInt( 500 ),
					width: Dimensions.get( 'window' ).width - 40,
					left: parseInt( 20 ),
					top: parseInt( 20 ),
					resizeMode: 'contain',
					position: 'absolute'
				}}
					source={{
					uri: this.state.parsedUrl
				}}/>

			<Button onPress={() => { this.setState({ parsedUrl: ' ' })}} title="dismiss"></Button>
			</View>
		)
	}
	takePicture( ) {
		this.camera.capture( ).then(( data ) => console.log( data )).catch(err => console.error( err ));
	}
	readQR( e ) {
		if ( e.data) {
			this.setState({ parsedUrl: e.data , opacity: 0.9 });
		} else {
			this.setState({ parsedUrl: null, opacity: 0 });
		}
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	preview: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		height: Dimensions.get( 'window' ).height,
		width: Dimensions.get( 'window' ).width
	},
	capture: {
		flex: 0,
		backgroundColor: '#fff',
		borderRadius: 5,
		color: '#000',
		padding: 10,
		margin: 40
	}
});

export default UserInfo
