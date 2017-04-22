import React, { PropTypes, Component } from 'react';
import {
	Text,
	View,
	Navigator,
	TouchableHighlight,
	Button,
	StyleSheet,
	Image
} from 'react-native';
import { FBLogin, FBLoginManager } from 'react-native-facebook-login';

class Login extends Component {
	constructor( props ) {
		super( props )
		this.state = {
			loggedIn: false,
			profilePic: 'https://yt3.ggpht.com/-_IXzYFNWU8U/AAAAAAAAAAI/AAAAAAAAAAA/6tXWVmD0E64/s900-c-k-no-mo-rj-c0xffffff/photo.jpg'
		}
	}

	render( ) {
		var _this = this;
		return (
			<View>
					<FBLogin
						style={{
						height: 300,
						paddingTop: 50,
						marginBottom: 0
					}}
						buttonView={<View><Text style={{fontSize: 30}}> PRESS ME</Text></View>}
						ref={( fbLogin ) => {
						this.fbLogin = fbLogin
					}}
						permissions={[ "email", "user_friends" ]}
						loginBehavior={FBLoginManager.LoginBehaviors.Native}
						onLogin={function ( data ) {
						console.warn( "Logged in!" );
						console.warn(JSON.stringify( data ));
						_this.setState({ user: data, loggedIn: true, profilePic: data.profile.picture.data.url });
					}}
						onLogout={function ( ) {
						console.warn( "Logged out." );
						_this.setState({ user: null });
					}}
						onLoginFound={function ( data ) {
						console.warn( "Existing login found." );
						console.warn(JSON.stringify( data ));
						_this.setState({ user: data });
					}}
						onLoginNotFound={function ( ) {
						console.warn( "No user logged in." );
						_this.setState({ user: null });
					}}
						onError={function ( data ) {
						console.warn( "ERROR" );
						console.warn( data );
					}}
						onCancel={function ( ) {
						console.warn( "User cancelled." );
					}}
						onPermissionsMissing={function ( data ) {
						console.warn( "Check permissions!" );
						console.warn( data );
					}}/>


				<Image style={{
					width: 50,
					height: 50
				}} source={{
					uri: this.state.profilePic
				}}/>
				<Text>
					The button needs to be styled from the instructions for login view
					from the Andriod setup view github thingie.
					( FBlogin takes prop "buttonView")

				</Text>
			</View>
		)
	}

}
export default Login
