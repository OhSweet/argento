// @auto-fold here

import React, { Component } from 'react'
import {
	View,
	StyleSheet,
	Text,
	TextInput,
	Picker,
	ScrollView
} from 'react-native'

import { Divider, Container, Card, BottomNavigation, Icon } from "react-native-material-ui"

import styles from "./styles.js"

import BasicInfo from "./BasicInfo"
import Discovery from "./Discovery"
import Content from "./Content"

export default function ( ) {
	return (
		<View style={styles.mainContentContainer}>

			{/* CONDITIONALLY RENDERING TABS */}

			<ScrollView >
				{this.state.activeTabIndex === 0
					? ( <BasicInfo onBasicInfoComplete={this
						.onBasicInfoComplete
						.bind( this )}/> )
					: (this.state.activeTabIndex === 1
						? ( <Discovery onDiscoveryInfoComplete={this
							.onDiscoveryInfoComplete
							.bind( this )}/> )
						: ( <Content onContentInfoComplete={this
							.onContentInfoComplete
							.bind( this )} discoveryType={this.state.discoveryInfo.discoveryType}/> ))
				}

			</ScrollView>

			{/* PERMANENT PART OF THE VIEWS */}
			<View>
				<BottomNavigation>
					<View style={styles.bottomTabs}>
						<BottomNavigation.Action key="basic" active={this.state.activeTabIndex == 0} icon="all-out" label="Basic"/>
						<BottomNavigation.Action key="detection" active={this.state.activeTabIndex == 1} icon="explore" label="Detect"/>
						<BottomNavigation.Action key="content" active={this.state.activeTabIndex == 2} icon="receipt" label="Content"/>
					</View>

				</BottomNavigation>
			</View>
		</View>

	)
}
