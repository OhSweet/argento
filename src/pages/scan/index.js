import React, { Component } from 'react';

import {
	Text,
	View,
	TouchableHighlight,
	StyleSheet,
	TextInput,
	Dimensions,
	Image,
	Button,
	PixelRatio
} from 'react-native';

import Camera from "react-native-camera";

class Scan extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			parsedUrl: null,
			opacity: 0
		};
		console.warn("dimesions are", JSON.stringify(Dimensions.get('window')))
		console.warn("Pixel ratio is", PixelRatio.get("window"))
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
					aspect={Camera.constants.Aspect.fit}>
				</Camera>
				{ this.state.parsedUrl? (
					<Image
						style={{
						opacity: this.state.opacity,
						height: this.state.bounds[0][1] - this.state.bounds[1][1],
						width: this.state.bounds[2][0] - this.state.bounds[1][0],
						top: this.state.bounds[1][1],
						left: this.state.bounds[1][0],
						resizeMode: 'contain',
						position: 'absolute'
					}}
						source={{
						uri: this.state.parsedUrl
					}}/>
				): null}
			{ this.state.parsedUrl ? (
				<View style={{ position: "absolute", top: 0, left: 0, right:0, bottom: 0	}}>
					<Text style={{position:"absolute", bottom: 26, left: 0 , color: "white"}}> { this.state.bounds[0][0] + "|" + this.state.bounds[0][1] }</Text>
					<Text style={{position:"absolute", top: 26, left: 0, color: "white"}}> { this.state.bounds[1][0] + "|" + this.state.bounds[1][1] }</Text>
					<Text style={{position:"absolute", top: 30, right: 0, color: "white"}}> { this.state.bounds[2][0] + "|" + this.state.bounds[2][1] }</Text>

				</View>
			): null }
			</View>
		)
	}

	readQR( e ) {
		let bounds = JSON.parse(e.bounds).map((bigArr) => bigArr.map(
			(item, index) => {
				return PixelRatio.roundToNearestPixel(item/3)
				// Some random width ratio that works for me
				if ( index == 0 ) return PixelRatio.roundToNearestPixel(item/3.10312)
				}
		))

		if ( e.data) {
			this.setState({ parsedUrl: e.data , opacity: 1 , bounds: bounds });
		} else {
			this.setState({ parsedUrl: null, opacity: 0 });
		}
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "black"
	},
	preview: {
		position: "absolute",
		top: 0,
		bottom: 0,
		left:0,
		right: 0,
		height: Dimensions.get( 'screen' ).height,
		width: Dimensions.get( 'screen' ).width
	}
});

export default Scan
