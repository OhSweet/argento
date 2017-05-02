import React, { Component } from 'react';
import MapView from "react-native-maps"
import { fragments } from "../../services/fragments"
import { location } from "../../services/location"

import { View, StyleSheet, Text, TextInput, Picker } from 'react-native';
import { Button, Divider, Container, Card } from "react-native-material-ui"
import { Select, Option } from "react-native-chooser";


import styles from "./styles.js"
class Create extends Component {
	constructor( props ) {
		super( props )
		this.state = {
			busy: false,
			title: "Enter your title",
			description: "Enter your description"
		}
	}

	render() {

		return (
			<View>
				{/* FIRST SECTION  */}
				<View>
					<Text> Insert title </Text>

					<TextInput onChangeText={(title) => this.setState({title})}>
						{this.state.title}
					</TextInput>

					<Text> Description </Text>

					<TextInput onChangeText={(description) => this.setState({description})}>
						{this.state.description}
					</TextInput>

					<Divider inset={true} style={{ height: 20 }} ref={(ref) => {this.dividerRef = ref ; console.log("ref", ref)}}/>

				</View>

			<View style={{ marginTop: 20, marginBottom: 20}}></View>

			<Divider/>
			<Text> Detection info </Text>
			<Divider/>
			<View style={{ marginTop: 10, marginBottom: 10}}></View>
			<View>
				<Picker
				  mode="dialog"
				  selectedValue={this.state.discoveryType}
				  onValueChange={(discoveryType) => this.setState({discoveryType})}>

				  <Picker.Item label="Proximity" value="proximity" />
				  <Picker.Item label="Qr code" value="qr" />
				  <Picker.Item label="Beacon" value="beacon" />
				</Picker>
			</View>
			<Text> { JSON.stringify(this.state) } </Text>
				<View>
					<Button primary accent raised
						disabled={this.state.busy}
						text="Create"
						onPress={ this.createFragment.bind(this) }>
							Create
					</Button>
				</View>
			</View>
		)
	}
	createFragment() {
		this.setState( { busy: true } )
		location.getCurrent()
			.then( ( coords ) => {
				return fragments.create( {
					title: this.state.title,
					description: this.state.description,
					icon: this.state.icon,
					location: {
						latitude: coords.latitude,
						longitude: coords.longitude
					}
				} )
			} )
			.then( ( response ) => {
				this.setState( { busy: false } )
			} )
	}

}
export default Create
