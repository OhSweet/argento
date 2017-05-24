import React, { Component } from 'react';

import {
	Text,
	View,
	TouchableHighlight,
	Button,
	StyleSheet
} from 'react-native';
import { Drawer, Avatar } from "react-native-material-ui"
import Container from "../container"
import styles from "./styles"
import routes from "../../routes.js"
import Utils from "../../utils"

class DrawerContent extends Component {

	constructor( props ) {
		super( props )
		this.state = {
			navigationalItems: this.createNavigationalItems( routes, this.props.navigator )
		}
	}
	render( ) {
		return (
			<View style={styles.contentContainer}>
				<Drawer>
					<Drawer.Header>
						<Drawer.Header.Account
							avatar={< Avatar text = {
							'A'
						} />}
							accounts={[
							{
								avatar: <Avatar text="B"/>
							}, {
								avatar: <Avatar text="C"/>
							}
						]}
							footer={{
							dense: true,
							centerElement: {
								primaryText: 'Reservio',
								secondaryText: 'business@email.com'
							},
							rightElement: 'arrow-drop-down'
						}}/>
					</Drawer.Header>
					<Drawer.Section
						divider
						items={this.state.navigationalItems}/>
				</Drawer>
			</View>
		)
	}
	createNavigationalItems( routes, navigator ) {
		// Display only the pages that are the main entry points for actions ...
		return Utils.objToArray(routes)
			.filter( ( route ) => route.drawerInfo )
			.map(( route ) => {
				return {
					icon : route.drawerInfo.icon || "question",
					value : route.drawerInfo.name,
					onPress : ( ) => {
						return route != this.props.route && navigator.replace( { ...route, key: Math.random() } )
					}
				}
			})
	}
}
export default DrawerContent

// <Drawer.Section 	title="Personal" 	items={[ 	{ 		icon: 'info', 		value: 'Info' 	}, { 		icon: 'settings', 		value: 'Settings' 	}
// ]}/>
