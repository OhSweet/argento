// @auto-fold here

import React, {
	Component
}
from 'react'
import {
	View,
	StyleSheet,
	Text,
	TextInput,
	Picker,
	ScrollView
}
from 'react-native'

import {
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

import BasicInfo from "./BasicInfo"
import Discovery from "./Discovery"

export default function() {
	return(
		<View style={{ flex: 1, flexDirection: "column", justifyContent: "space-between", alignItems: "stretch"}}>

			{/* CONDITIONALLY RENDERING TABS */}

			<ScrollView style={{ marginTop: 30 }} >
				{
					this.state.activeTabIndex === 0
					? (<BasicInfo onBasicInfoComplete={ this.onBasicInfoComplete.bind(this) }/>)
					:(
						this.state.activeTabIndex === 1
						? (<Discovery onDiscoveryInfoComplete={ this.onDiscoveryInfoComplete.bind(this) }/>)
						: null
					)
				}

			</ScrollView>

			{/* PERMANENT PART OF THE VIEWS */}
			<View>
				<BottomNavigation>
					<View style={{ flex:1, flexDirection: "row", justifyContent: "space-around" , alignItems: "center"}}>
						<BottomNavigation.Action
							key="basic"
							active={ this.state.activeTabIndex == 0 }
							icon="all-out"
							label="Basic"
							onPress={() => this.setState({ activeTabIndex: 0 })}
						/>

						<BottomNavigation.Action
							key="detection"
							disabled={true}
							active={ this.state.activeTabIndex == 1 }
							icon="explore"
							label="Detection"
							onPress={() => this.setState({ activeTabIndex: 1 })}

						/>
						<BottomNavigation.Action
							key="content"
							active={ this.state.activeTabIndex == 2 }
							icon="receipt"
							label="Content"
						/>
					</View>

			</BottomNavigation>
			</View>
		</View>

	)
}
