import React, { Component } from 'react';

import { Text, View, Navigator, TouchableHighlight, TextView } from 'react-native';

import Home from './pages/home.js'
import About from './pages/about.js'
import CustomNavbar from "./common/navbar.js"
import UserInfo from "./pages/userInfo.js"

class App extends Component {

	constructor(props){
		super(props)
		this.state = {
			routes: [
				{
					name: 'Home',
					component: Home
				}, {
					name: 'About',
					component: About
				},
				{
					name: 'UserInfo',
					component: UserInfo
				}
			]
		}
	}
	render( ) {
			{/* Pentru nav animations: https://facebook.github.io/react-native/docs/navigator.html , ctrl+f Navigator.sceneConfigs */}
		return (
			<Navigator
				initialRoute={this.state.routes[0] }
				configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom }
				renderScene={(route, navigator) => React.createElement(route.component, { ...this.props, route, navigator, routes: this.state.routes })
					}
				navigationBar={
					<CustomNavbar routes={ this.state.routes }/>
				}
			/>
	 	)
	}

}
export default App
