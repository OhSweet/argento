import React, { Component } from 'react';
import {
	Text,
	View,
	TouchableHighlight,
	Button,
	StyleSheet,
	Image
} from 'react-native';
import { Drawer, Avatar } from "react-native-material-ui"
import Container from "../container"
import styles from "./styles"
import routes from "../../routes.js"
import Utils from "../../utils"
import { identity } from "../../services/identity"

class DrawerContent extends Component {

	constructor( props ) {
		super( props )
		this.state = {
			navigationalItems:
				this.createNavigationalItems( this.props.routes )
				.concat(this.createNonNavigationItems.call(this)),

			userInfo: 'A',
			userPhoto: 'https://facebook.github.io/react/img/logo_og.png'
		}
		//console.log('nav items', this.state.navigationalItems)
		this.getUserInfo.call( this )
	}

	getUserInfo( ) {
		identity.getUserInfo( ).then(( info ) => {
			if ( info ) {
				this.setState({ userInfo: info, userPhoto: info.picture.data.url })
			}
		})
	}
	render( ) {
		return (
			<View style={styles.contentContainer}>

				<Drawer>
					<Drawer.Header>
						<Drawer.Header.Account
							avatar={
								<Avatar image={
									<Image style={{
											width: 50, height: 50, borderRadius: 100
										}}

										source = {{ uri: this.state.userPhoto }}
										/>
									}
								/> }
							footer={{
								dense: true,
								centerElement: {
									primaryText: this.state.userInfo.first_name + ' ' + this.state.userInfo.last_name,
									secondaryText: this.state.userInfo.email
								}
							}}
						/>
					</Drawer.Header>

					<Drawer.Section divider items={ this.state.navigationalItems }/>

				</Drawer>
			</View>
		)
	}
	createNavigationalItems( routes, navigator ) {
		// Display only the pages that are the main entry points for actions ...

		return Utils.objToArray( routes ).filter( ( route ) => route.drawerInfo ).map(( route ) => {
			return {
				icon: route.drawerInfo.icon || "question",
				value: route.drawerInfo.name,
				onPress: ( ) => {
					return route != this.props.route && this.props.navigator.replace(route)
				}
			}
		})
	}
	removeUserData( ) {
		identity.removeToken( )
		identity.removeUserInfo( )
	}

	createNonNavigationItems( ) {
		let logout = {
			name: "Logout",
			icon: "exit-to-app"
		}

		//console.log("route is here", this.props.route, this.props.navigator)
		return [
			{
				icon: logout.icon,
				value: logout.name,
				onPress: ( ) => {
					this.removeUserData( );
					this.props.navigator.replace(this.props.routes.login);
					//this.redirectToLogin.call(this)
				}
			}
		]
	}
}
export default DrawerContent
