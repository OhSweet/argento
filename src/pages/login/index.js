import React, { PropTypes, Component } from 'react';
import {
	Text,
	View,
	Navigator,
	TouchableHighlight,
	Button,
	StyleSheet
} from 'react-native';
import { FBLogin, FBLoginManager } from 'react-native-facebook-login';

class Login extends Component {

	render( ) {

		return (
			<View style={{ flex: 1}}>
			  <FBLogin>OK</FBLogin>
			</View>
		)
	}

}
export default Login
