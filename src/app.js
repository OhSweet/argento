import React, { Component } from 'react';

import { Text, View, Navigator, TouchableHighlight, TextView, StatusBar , NativeModules} from 'react-native';

import { ThemeProvider } from 'react-native-material-ui';
import routes from "./routes"
import Container from "./common/container"
import CustomNavigationLayout from "./common/customnavigationlayout"

const UIManager = NativeModules.UIManager;

class App extends Component {

	constructor( props ) {
		super( props )
	}
	componentWillMount() {
	if (UIManager.setLayoutAnimationEnabledExperimental) {
		UIManager.setLayoutAnimationEnabledExperimental(true);
	}
}
	renderScene( route, navigator ) {
		return (
			<Container>

				<StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent/>
				<View style={{
					height: 24
				}}/>
				<CustomNavigationLayout navigator={ navigator } route={ route } routes={routes}/>

			</Container>
		)
	}
	render( ) {
		return (
			<ThemeProvider>
				<Navigator
					initialRoute={routes.login}
					configureScene={( route, routeStack ) => Navigator.SceneConfigs.FadeAndroid}
					renderScene={this.renderScene}/>

			</ThemeProvider>
		)
	}
}

export default App
