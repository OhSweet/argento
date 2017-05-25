import React, {
	Component
} from 'react'
import {
	View,
	StyleSheet,
	Text,
	TextInput,
	Dimensions
} from 'react-native'
import {
	Button,
	Divider,
	Icon,
	Checkbox
}
from "react-native-material-ui"

import { RichTextEditor, RichTextToolbar } from 'react-native-zss-rich-text-editor';

import styles from "../styles.js"
import qrCode from "./qrCode"
import RichTextContent from "./richText"
import QRCodeContent from "./qrCode"


class BasicInfo extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return(
			<View>
				{
					this.props.discoveryType == 'qr'
					? (
						<QRCodeContent />
					)
					: (
						<RichTextContent />
					)
				}
			</View>
		)
	}
}

export default BasicInfo
