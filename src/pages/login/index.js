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
		var _this = this;
	      return (
	        <FBLogin style={{ marginBottom: 10, }}
	          ref={(fbLogin) => { this.fbLogin = fbLogin }}
	          permissions={["email","user_friends"]}
	          loginBehavior={FBLoginManager.LoginBehaviors.Native}
	          onLogin={function(data){
	            console.warn("Logged in!");
	            console.warn(data);
	            _this.setState({ user : data.credentials });
	          }}
	          onLogout={function(){
	            console.warn("Logged out.");
	            _this.setState({ user : null });
	          }}
	          onLoginFound={function(data){
	            console.warn("Existing login found.");
	            console.warn(data);
	            _this.setState({ user : data.credentials });
	          }}
	          onLoginNotFound={function(){
	            console.warn("No user logged in.");
	            _this.setState({ user : null });
	          }}
	          onError={function(data){
	            console.warn("ERROR");
	            console.warn(data);
	          }}
	          onCancel={function(){
	            console.warn("User cancelled.");
	          }}
	          onPermissionsMissing={function(data){
	            console.warn("Check permissions!");
	            console.warn(data);
	          }}
	        />)
	}

}
export default Login
