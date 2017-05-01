import React, { Component } from 'react';
import MapView from "react-native-maps"
import { fragments } from "../../services/fragments"
import { location } from "../../services/location"

import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Button } from "react-native-material-ui"

class Create extends Component {
	constructor( props ) {
		super( props )
		this.state = {
			busy: false,
			title: "Enter your title",
			description: "Enter your description",
			icon: "bullhorn"
		}
	}

	render( ) {

		return (
			<View style={{
				padding: 20
			}}>
				<Text>
					Title
				</Text>
				<TextInput onChangeText={( title ) => this.setState({ title })}>
					{this.state.title}
				</TextInput>
				<Text>
					Description
				</Text>
				<TextInput onChangeText={( description ) => this.setState({ description })}>
					{this.state.description}
				</TextInput>
				<View style={{
					height: 80
				}}></View>
				<Button primary accent disabled={this.state.busy} raised text="Create" onPress={this.createFragment.bind( this )}>Create
				</Button>
			</View>
		)
	}
	createFragment( ) {
		this.setState({ busy: true })
		location.getCurrent( ).then(( coords ) => {
			return fragments.create({
				title: this.state.title,
				description: this.state.description,
				icon: this.state.icon,
				location: {
					latitude: coords.latitude,
					longitude: coords.longitude
				}
			})
		}).then((response) => {
			this.setState({ busy: false})
			console.warn("DONE!!")
		})
	}

}
export default Create
