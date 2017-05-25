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
import InfoTexts from "./InfoTexts.stateless.js"

class Discovery extends Component {
	constructor(props) {
		super(props)
		this.state = {
			busy: false,
			discoveryType: "proximity",
			password: null
		}
	}

	completeData() {
		let {
			discoveryType,
			password
		} = this.state
		this.props.onDiscoveryInfoComplete({
			discoveryType,
			password
		})
	}

	isValidData() {
		return(this.discoveryType)
	}
	render() {
		return(
			<View>
				<View style={{ padding: 30 }}>
					<Icon name="visibility" style={styles.iconStyle} />

					<Text style={styles.heading}>
						Discovery settings
					</Text>

					<View style={{ marginBottom: 15 }}></View>

					<View
						style={{ flexDirection: 'row', justifyContent: "space-around", alignItems: "center"}}>

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
					</View>
					{/* TODO Move these three into their own separate dumb components */}
					{ InfoTexts(this.state.discoveryType )}
				</View>
				<Divider/>


					{ this.state.discoveryType != 'qr'
						?(
							<View style={{ padding: 30 }}>
								<Icon name="lock-outline" style={styles.iconStyle} />

								<Text style={styles.heading}> Password protection</Text>

								<View style={{ marginBottom: 15 }}></View>
									<TextInput
										secureTextEntry
										style={{ 'textAlign': 'center'}}
										onChangeText={(password) => this.setState({password})} />
							</View>
						): null
					}

				<Divider/>
					{/* TODO Move these three into their own separate dumb components */}

				<View style={{ padding: 30 }}>
					<Button
						raised
						primary
						text="Next"
						upperCase={false}
						onPress={ this.completeData.bind(this) }
						enabled={ this.isValidData() }>

					</Button>
				</View>

			</View>
		)
	}
}

export default Discovery
