import React, { Component } from 'react'
import {
	View,
	StyleSheet,
	Text,
	TextInput,
	Dimensions,
	ToastAndroid
} from 'react-native'
import { Button, Divider, Icon, Checkbox } from "react-native-material-ui"
import { RichTextEditor, RichTextToolbar } from 'react-native-zss-rich-text-editor';

import styles from "../styles.js"

class RichTextContent extends Component {
	constructor( props ) {
		super( props )
		this.state = {}
	}

	completeData( ) {
		this.setState({ submitted: true })
console.warn('the props for richtext',this.props)

		this
			.richtext
			.getContentHtml( )
			.then(( content ) => this.props.onContentInfoComplete({ content: content, type: 'richtext' }))
			.then(( ) => {
				ToastAndroid.show( 'Saved to remote..in the future must make this redirect to my fragments !', ToastAndroid.SHORT )
			})
	}

	isValidData( ) {
		return true
	}

	render( ) {
		return (
			<View style={styles.padding30}>
				<RichTextEditor
					style={{
						height: Dimensions
						.get( 'window' )
						.height * 0.3,
						width: Dimensions
						.get( 'window' )
						.width - 40
					}}
					ref={( r ) => {
						this.richtext = r
					}}
					hiddenTitle
					initialTitleHTML={'My title'}
					titlePlaceholder="No title ... "
					contentPlaceholder={'My text or story ... '}
					initialContentHTML="<em> I want to say to the world that ... </em> "
					editorInitializedCallback={( ) => this.onEditorInitialized( )}/>

				<RichTextToolbar
					actions={[
						'bold',
						'italic',
						'unorderedList',
						'orderedList',
						'INST_LINK',
						'REMOVE_FORMAT',
						'setBackgroundColor'
				]}
					getEditor={( ) => this.richtext}/>

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

export default RichTextContent
