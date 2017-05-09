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

export default function () {
	return(
		<View style={{ flex: 1, flexDirection: "column", justifyContent: "space-between", alignItems: "stretch"}}>

			{/* FIRST SECTION  */}

			<ScrollView style={{ marginTop: 30 }} >
				<BasicInfo onBasicInfoComplete={ this.onBasicInfoComplete.bind(this) }/>
			</ScrollView>
			<View>
				<BottomNavigation>
					<View style={{ flex:1, flexDirection: "row", justifyContent: "space-around" }}>
						<BottomNavigation.Action
							key="basic"
							active={ this.state.activeTab == 'basic' }
							icon="info"
							label="Basic"
							onPress={() => this.setState({ activeTab: 'basic' })}
						/>

						<BottomNavigation.Action
							key="detection"
							disabled={true}
							active={false}
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
