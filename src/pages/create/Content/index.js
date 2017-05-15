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

import {RichTextEditor, RichTextToolbar} from 'react-native-zss-rich-text-editor';

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
	onEditorInitialized() {
		console.warn("it's ready!!")
	}
	render() {
		return(
			<View style={{padding: 20}}>
		          <RichTextEditor
					  style={{height: Dimensions.get('window').height * 0.3, width: Dimensions.get('window').width - 40}}
		              ref={(r) => { this.richtext = r; console.log(r) } }
		              initialTitleHTML={'<p>My title</p>'}
		              initialContentHTML={'My text or story ... '}
		              editorInitializedCallback={() => this.onEditorInitialized()}
		          />
		          <RichTextToolbar
					actions={['bold','italic','unorderedList','orderedList','INST_LINK', 'REMOVE_FORMAT']}
					ref={(r) => { console.log("is toolbar", r)}}
		            getEditor={() => this.richtext}
		          />

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
