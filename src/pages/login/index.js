import React, {PropTypes, Component} from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    Button,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';
import {FBLogin, FBLoginManager} from 'react-native-facebook-login';
import FBLoginView from './FBLoginView.js'
import {identity} from "../../services/identity"
import {Icon} from 'react-native-material-ui'
const window = Dimensions.get('window')
const fbLogo = require('../../assets/facebook-logo-png-30.png')

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: false,
            busy: true
        }
        this.checkIdentity.call(this)
    }

    checkIdentity() {
        identity.getToken().then((token) => {
            if (token) {
                this.redirectToHome();
            } else
                this.setState({busy: false})
        })
    }

    redirectToHome(data) {
        this.props.navigator.push(this.props.routes.home)
    }

    onLogin(data) {
        // console.log( "data is", data );
        identity.setToken(data.credentials.token);
        identity.setUserinfo(data.profile)
        this.checkIdentity()
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
            <View style={{
                flex: 1
            }}>
                <View
                    style={this.state.busy
                    ? [styles.fullPage, styles.noDisplay]
                    : styles.fullPage}>

                      <Image source={fbLogo}
                    style={{width: 50, height: 50}}/>

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
                        onLogin={this.onLogin.bind(this)}
                        onLogout={this.onLogout.bind(this)}
                        onLoginFound={this.onLoginFound.bind(this)}
                        onLoginNotFound={this.onLoginNotFound.bind(this)}
                        onError={this.onLoginError.bind(this)}
                        onCancel={this.onLoginCancel.bind(this)}
                        onPermissionsMissing={this.onLoginError.bind(this)}/>
                </View>

                <View
                    style={this.state.busy
                    ? [
                        styles.fullPage, {justifyContent: 'center',
                        alignItems: 'center'}
                    ]
                    : [
                        styles.fullPage,
                        styles.noDisplay
                    ]}>
                    <Text>Loading</Text>
                </View>

            </View>
        )
    }
}
const styles = {
    noDisplay: {
        top: window.height,
        bottom: -window.height
    },
    fullPage: {
        position: 'absolute',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        overflow: 'hidden',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }

}

export default Login
