import React, {
	Component
} from 'react'
import {
	View,
	StyleSheet,
	Text,
	TextInput
} from 'react-native'
import {
	Button,
	Divider,
	Icon,
	Checkbox
}
from "react-native-material-ui"


import styles from "../styles.js"

class BasicInfo extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	completeData() {
		console.warn("completed")
	}

	isValidData() {
		return true
	}
	render() {
		return(
			<View>
				<View style={{ padding: 30 }}>
				</View>

				<Divider />


				<View style={{ padding: 30 }} >
					<Button
						raised
						primary
						text="Complete"
						upperCase={false}
						onPress={ this.completeData.bind(this) }
						disabled={ !this.isValidData() }>

					</Button>
				</View>
			</View>
		)
	}
}

export default BasicInfo
