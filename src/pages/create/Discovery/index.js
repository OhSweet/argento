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
			icon: "explore",
			password: null
		}
	}
	render() {
		return(
			<View>
				<View style={{ padding: 30 }}>
					<Icon name={ this.state.icon } style={styles.iconStyle} />

					<Text style={styles.heading}>
						How can you see it
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
					<View style={{ padding: 20 }} />

					<Divider/>
					<View style={{ padding: 20 }} />
					<Button
						raised
						primary
						text="Next"
						upperCase={false}
						onPress={ () => {
							let { title, description, discoveryType } = this.state
							this.props.onBasicInfoComplete({ title, description, discoveryType})
						}}
						disabled={ !this.state.description || !this.state.title || !this.state.discoveryType }>

					</Button>
				</View>
			</View>
		)
	}
}

export default Discovery
