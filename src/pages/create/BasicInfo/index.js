import React, {
	Component
} from 'react'
import {
	View,
	StyleSheet,
	Text,
	TextInput,
	Picker
} from 'react-native'
import {
	Button,
	Divider,
	Container,
	Card,
	BottomNavigation,
	Icon
}
from "react-native-material-ui"

import styles from "../styles.js"

class BasicInfo extends Component {
	constructor(props) {
		super(props)
		this.state = {
			busy: false,
			title: "",
			description: "",
			discoveryType: "proximity",
			icon: "explore"
		}
	}
	render() {
		return(
			<View>

				<View style={{ padding: 30 }}>
					<Icon
						name="face"
						style={{
							position: "absolute",
							top: 15,
							left: 30
						}}
						size={50}/>

					<Text style={styles.heading}>
						What should a fit title be ?
					</Text>

					<TextInput
						style={styles.serifThin}
						maxLength={25}
						placeholder="Trees in spring"
						onChangeText={( title ) => this.setState({ title })}>
						{this.state.title}
					</TextInput>

				</View>
				<Divider />
					<View style = {{ padding: 30 }} >
						<Icon
							name="nature"
							style={{
								position: "absolute",
								top: 15,
								left: 30
							}}
							size={50}/>
						<Text style = {styles.heading}>
							Short description
						</Text>

						<TextInput
							style={styles.serifThin}
							maxLength={ 45}
							placeholder="Sooo beautiful !"
							onChangeText={( description ) => this.setState({description})}>
							{this.state.description}
						</TextInput>

					</View>
					<Divider/>

					<View style={{ padding: 30 }}>
						<Icon
							name="face"
							style={{
								position: "absolute",
								top: 15,
								left: 30
							}}
							size={50}/>

						<Text style={styles.heading}>
							How should people view it?
						</Text>
						<View style={{ marginBottom: 15 }}></View>
						<View style={{ diplay: 'flex', flexDirection: 'row', justifyContent: "space-around", alignItems: "center"}}>
							<View style={{flex: 0.75}}>
								<Picker
									mode="dialog"
									selectedValue={this.state.discoveryType}
									onValueChange={( discoveryType ) => {
										let icon = "explore"
										if (discoveryType == 'qr') { icon = "settings-overscan" }
										if (discoveryType == 'beacon' ) { icon = "wifi-tethering"}
										this.setState({ discoveryType, icon })
									}}>

									<Picker.Item label = "Proximity" value = "proximity" />
									<Picker.Item label="Qr code" value="qr" />
									<Picker.Item label = "Beacon" value = "beacon" />

								</Picker>
							</View>
							<View style={{ alignItems: "center", flex: 0.25 }}>
								<Icon
									name={ this.state.icon }
									size={30}
								/>
							</View>
						</View>
						<View>
							{
								this.state.discoveryType === 'proximity' ? (
								<Text>
									This means only people that are in the area can discovery your fragment no the map and access it's contents.
								</Text>)
								: null
							}
							{
								this.state.discoveryType === 'qr' ? (
								<Text>
									This enables you to create a qr code based on an image or gif, that will pop up when scanning the code in the physical location. We will provide you with the QR-code image
								</Text>)
								: null
							}
							{
								this.state.discoveryType === 'beacon' ? (
								<Text>
									We will let people know about it with a push notification once they pass arond the area :). This has a longer range than normal location discovery.
								</Text>)
								: null
							}
						</View>

				</View>
			</View>
		)
	}
}

export default BasicInfo
