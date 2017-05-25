import React, {PropTypes, Component} from 'react';
import {Text,View,TouchableHighlight,Button,StyleSheet,Image} from 'react-native';
import {FBLogin, FBLoginManager} from 'react-native-facebook-login';
import FBLoginView from './FBLoginView.js'
import {identity} from "../../services/identity"

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: false,
            profilePic: 'https://openclipart.org/download/247320/abstract-user-flat-4.svg',
            busy: true
        }
        this.checkIdentity.call(this)
    }

    checkIdentity() {
        identity.getToken().then((token) => {
            if (token) {
                this.redirectToHome();
            }
        })
    }

    redirectToHome(data) {
        this.props.navigator.push(this.props.routes.home)
    }

    onLogin(data) {
        // console.log( "data is", data );
        identity.setToken(data.credentials.token);
        identity.setUserinfo(data.profile)
        // this.redirectToHome.call( this ) this.setState({ user: data, loggedIn: true, profilePic:
        // data.profile.picture.data.url });
    }
    onLoginFound(data) {
        // console.log( "Login found", data )
    }
    onLogout() {}
    onLoginError() {}
    onLoginCancel() {}
    onLoginNotFound() {}
    render() {
        var _this = this;
        return (
            <View>
                <View style={this.state.busy
                    ? styles.fullPage
                    : styles.noDisplay}><FBLogin
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
								onLogin={this.onLogin.bind(this)}
								onLogout={this.onLogout.bind(this)}
								onLoginFound={this.onLoginFound.bind(this)}
								onLoginNotFound={this.onLoginNotFound.bind(this)}
								onError={this.onLoginError.bind(this)}
								onCancel={this.onLoginCancel.bind(this)}
								onPermissionsMissing={this.onLoginError.bind(this)}/></View>

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
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: 'red'
    }
}

export default Login
