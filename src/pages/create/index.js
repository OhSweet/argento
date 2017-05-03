import React, {
	Component
}
from 'react';
import MapView from "react-native-maps"
import {
	fragments
}
from "../../services/fragments"
import {
	location
}
from "../../services/location"

import {
	View,
	StyleSheet,
	Text,
	TextInput,
	Picker
}
from 'react-native';
import {
	Button,
	Divider,
	Container,
	Card,
	BottomNavigation,
	Icon
}
from "react-native-material-ui"
import {
	Select,
	Option
}
from "react-native-chooser";


import styles from "./styles.js"
class Create extends Component {
	constructor( props ) {
		super( props )
		this.state = {
			busy: false,
			title: null,
			description: null
		}
	}

	render() {

		return (
			<View style={{ flex: 1, flexDirection: "column", justifyContent: "space-between", alignItems: "stretch"}}>
				{/* FIRST SECTION  */}
				<View style={{marginTop: 30}}>
					<View style={{padding: 30}}>
						<Icon name="face" style={{ position: "absolute" , top: 15, left: 30 }} size={ 50 }/>
						<Text style={styles.heading}> What should a fit title be ? </Text>

						<TextInput
							style={styles.serifThin}
							maxLength={25}
							placeholder="Trees in spring"
							onChangeText={(title) => this.setState({title})}>
							{this.state.title}
						</TextInput>

					</View>
					<Divider/>

					<View style={{padding: 30}}>
						<Icon name="nature" style={{ position: "absolute" , top: 15, left: 30 }} size={ 50 }/>
						<Text style={styles.heading}> Short description </Text>

						<TextInput
							style={styles.serifThin}
							maxLength={45}
							placeholder="Sooo beautiful !"
							onChangeText={(description) => this.setState({description})}>
							{this.state.description}
						</TextInput>

						<Divider inset={true} style={{ height: 20 }} ref={(ref) => {this.dividerRef = ref ; console.log("ref", ref)}}/>
					</View>
					<View>
					</View>

					<View style={{ marginTop: 20, marginBottom: 20}}>
					</View>
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
							text="Create - needs to go in last tab"
							onPress={ this.createFragment.bind(this) } />
					</View>
				</View>
				<View>
					<BottomNavigation
						ref={(ref) => console.log("bottom nav reg", ref)}
					>
						<View style={{ flex:1, flexDirection: "row", justifyContent: "space-around" }}>
							<BottomNavigation.Action
								ref={(ref) => console.log("bottom nav action ref", ref)}
								key="basic"
								active={ this.state.activeTab == 'basic' }
								icon="info"
								label="Basic"
								onPress={() => this.setState({ activeTab: 'basic' })}
							/>
							<BottomNavigation.Action
								key="detection"
								disabled={true}
								active={ false }
								icon="wifi"
								label="Discovery"
								onPress={() => this.setState({ activeTab: 'detection' })}
							/>
							<BottomNavigation.Action
								key="content"
								active={ false }
								icon="book"
								label="Content"
								onPress={() => this.setState({ activeTab: 'content' })}
							/>

						</View>

					</BottomNavigation>
				</View>
				</View>

		)
	}
	createFragment() {
		this.setState( {
			busy: true
		} )
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
				this.setState( {
					busy: false
				} )
			} )
	}

}
export default Create
