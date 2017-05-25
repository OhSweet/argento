import React, {
	Component,
} from 'react'
import {
	View,
	StyleSheet,
	Text,
	CameraRoll,
	ImageStore
} from 'react-native'

import {
	Button,
	Divider,
	Icon,
	Checkbox
}
from "react-native-material-ui"

import RNFS from "react-native-fs"

import styles from "../styles.js"
import QRCode from 'react-native-qrcode-svg';


class QRCodeContent extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	completeData() {

	}

	isValidData() {
		return true
	}

	saveImage() {
		console.log(this.svg)
		this.svg.toDataURL((data) => {

			RNFS.writeFile(RNFS.CachesDirectoryPath+"/the_other_side.png", data, 'base64')
			  .then((success) => {
				  console.warn('FILE WRITTEN!', success);
				  CameraRoll.saveToCameraRoll(RNFS.CachesDirectoryPath+"/the_other_side.png", 'photo')
			  })
			  .catch((err) => {
			    console.warn(err.message);
			  });

		})
	}

	render() {
		return(
			<View style={{padding: 20}}>
			    <QRCode
				  getRef={(c) => (this.svg = c)}
			      value="https://upload.wikimedia.org/wikipedia/en/3/39/Wakerlink.jpg"
			    />
			<Button text="Save to gallery" onPress={ this.saveImage.bind(this) }/>
			</View>
		)
	}
}

export default QRCodeContent
