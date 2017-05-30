import React, { Component } from 'react';

import {
	Text,
	View,
	TouchableHighlight,
	TextView,
	StatusBar,
	NativeModules
} from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components'

import { ThemeProvider } from 'react-native-material-ui';
import routes from "./routes"
import Container from "./common/container"
import CustomNavigationLayout from "./common/customnavigationlayout"
import styles from "../styles"

const UIManager = NativeModules.UIManager;

class App extends Component {

	constructor( props ) {
		super( props )
	}
	componentWillMount( ) {
		if ( UIManager.setLayoutAnimationEnabledExperimental ) {
			UIManager.setLayoutAnimationEnabledExperimental( true );
		}
	}
	renderScene( route, navigator ) {
		return (
			<Container>

				<StatusBar backgroundColor="#2979FF" translucent/>
				<View style={styles.statusBar}/>
				<CustomNavigationLayout navigator={navigator} route={route} routes={routes}/>

			</Container>
		)
	}
	render( ) {
		return (
			<ThemeProvider>
				<Navigator initialRoute={routes.login} configureScene={( route, routeStack ) => Navigator.SceneConfigs.FadeAndroid} renderScene={this.renderScene}/>

			</ThemeProvider>
		)
	}
}

export default App
