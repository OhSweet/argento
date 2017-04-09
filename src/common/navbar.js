import React, {Component} from 'react';

import {
	Text,
	View,
	Navigator,
	TouchableHighlight,
	Button,
	StyleSheet
} from 'react-native';
import Home from '../pages/home.js'
import About from '../pages/about.js'
import UserInfo from '../pages/userInfo.js'

class CustomNavbar extends Component {

	constructor(props){
		super(props)
	}
	_navigateTo(routeName) {
		{ /* No need to touch this function anymore. just don't because you're gonna fuck it up :)) stupid little thingie */ }
		let routes = this.props.routes
		{/* Ruta curenta ca sa nu impingem aceeasi ruta in stack de 2 ori*/}
		let currentRoute = this.props.navigator.getCurrentRoutes()[this.props.navigator.getCurrentRoutes().length -1]
				{/* caut din lista de rute pe cea care se numeste . cutarescu */}
		var chosenRoute = routes.filter((route) => {
			return (route.name === routeName)
		})[0]

		{ /*Daca e alta ruta, atunci o imping pe navigator */ }

		if (chosenRoute.name !== currentRoute.name){
			this.props.navigator.push({
				name: chosenRoute.name,
				component: chosenRoute.component,
				index: this.props.navState.routeStack.length
			})
		}
	}

	render() {
		  return (
			<View style={styles.container}>
				{/* Tab 1 . navigateTo trebuie tot timpul sa matchuiasca o ruta montata in app.js cu nume si o componenta*/}
				<TouchableHighlight
					onPress={this._navigateTo.bind(this, "Home")}
					style={styles.buttonleft}>
						<Text style={styles.buttonText}>Home</Text>
				</TouchableHighlight>

			<TouchableHighlight
				onPress={this._navigateTo.bind(this, "About")}
				style={styles.buttonright}>
					<Text style={styles.buttonText}>About</Text>
			</TouchableHighlight>

			<TouchableHighlight
				onPress={this._navigateTo.bind(this, "UserInfo")}
				style={styles.buttonright}>
					<Text style={styles.buttonText}>UserInfo</Text>
			</TouchableHighlight>
			</View>
		  )
	  }

  }

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection:"row",
		height: 50
	},
	titleText: {
		flex: 5,
		fontSize: 52,
		fontFamily: 'HelveticaNeue-CondensedBold',
		paddingTop: 40,
		paddingRight: 20,
		paddingLeft: 20,
		color: '#173e43'
	},
	buttonleft: {
		borderTopWidth: 2,
		borderTopLeftRadius: 20,
		borderTopColor: "black",
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		backgroundColor: '#3fb0ac'
	},
	buttonright: {
		borderTopWidth: 2,
		borderTopColor: "black",
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		backgroundColor: '#3fb0ac'
	},

	buttonTop: {
		top: 0,
		borderTopWidth: 1,
		borderTopColor: "black",
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		backgroundColor: '#3fb0ac'
	},
	buttonText: {
		fontFamily: 'HelveticaNeue-CondensedBold',
		color: '#fae596'
	}

})

export default CustomNavbar
