import React, {PropTypes, Component} from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    Button,
    StyleSheet,
    Image
} from 'react-native';
import {FBLogin, FBLoginManager} from 'react-native-facebook-login';
import FBLoginView from './FBLoginView.js'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: false,
            profilePic: 'https://yt3.ggpht.com/-_IXzYFNWU8U/AAAAAAAAAAI/AAAAAAAAAAA/6tXWVmD0E64/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
            busy: true
        }
    }

    redirectToHome(data) {
        console.warn('lalal')
        // this.setState({busy: false})
        // this.props.navigator.push(this.props.routes.home)
        //this.props.navigator.push()
    }

    onLoginFnc(data) {
        this.redirectToHome.call(this)
        //this.setState({ user: data, loggedIn: true, profilePic: data.profile.picture.data.url });
    }

    render() {
        var _this = this;
        return (
            <View>
								<View style={this.state.busy ? styles.fullPage : styles.noDisplay}>

								</View>
                <FBLogin
                    style={{
                    height: 300,
                    paddingTop: 50,
                    marginBottom: 0
                }}
                    buttonView={< FBLoginView />}
                    ref={(fbLogin) => {
                    this.fbLogin = fbLogin
                }}
                    permissions={["email", "user_friends"]}
                    loginBehavior={FBLoginManager.LoginBehaviors.Native}
                    onLogin={this.onLoginFnc.bind(this)}
                    onLogout={function() {
                    console.warn("Logged out.");
                    _this.setState({user: null});
                }}
                    onLoginFound={this.onLoginFnc.bind(this)}
                    onLoginNotFound={function() {
                    console.warn("No user logged in.");
                    _this.setState({user: null});
                }}
                    onError={function(data) {
                    console.warn("ERROR");
                    console.warn(data);
                }}
                    onCancel={function() {
                    console.warn("User cancelled.");
                }}
                    onPermissionsMissing={function(data) {
                    console.warn("Check permissions!");
                    console.warn(data);
                }}/>

                <Image
                    style={{
                    width: 50,
                    height: 50
                }}
                    source={{
                    uri: this.state.profilePic
                }}/>
                <Text>
                    The button needs to be styled from the instructions for login view from the Andriod setup view github thingie. ( FBlogin
                    takes prop "buttonView")

                </Text>
            </View>
        )
    }
}
 const styles = {
	 noDisplay: {
		 width: 0,
		 height: 0
	 },
	 fullPage: {
		 position: 'absolute',
		 top:0,
		 right:0,
		 left:0,
		 bottom:0,
		 backgroundColor: 'red'
	 }

 }

export default Login
