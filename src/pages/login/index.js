import React, {PropTypes, Component} from 'react';
import {Text,View,TouchableHighlight,Button,StyleSheet,Image,Dimensions} from 'react-native';
import {FBLogin, FBLoginManager} from 'react-native-facebook-login';
import FBLoginView from './FBLoginView.js'
import {identity} from "../../services/identity"
import {Icon} from 'react-native-material-ui'
const window = Dimensions.get('window')
const appLogo = require('../../assets/theOtherSideLogo.png')
const bkImg = require('../../assets/background.jpg')

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

                    <View style={styles.bkImgContainer}>
                      <Image source={bkImg} style={styles.bkImg}/>
                    </View>
                    <View style={styles.innerPage}>
                      <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: -400
                      }}>
                      <Text style={{
                        fontWeight:'bold',
                        color:'black',
                        marginRight: -4,
                        fontSize: 25
                      }}>The</Text>
                      <Image source={appLogo} style={{  width: 50,
                        height: 50}}/>
                        <Text style={{
                          fontWeight:'bold',
                          color:'black',
                          marginLeft: -4,
                          fontSize: 25
                        }}>therSide</Text>
                      </View>
                      <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        top: 0,
                        //backgroundColor:'red',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}>
                      <FBLogin
                          style={{
                          width:null,
                          height: 300,
                          paddingTop: 50,
                          marginBottom: 0,
                          left: 0,
                          right: 0,
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
                  </View>
                </View>

                <View
                    style={this.state.busy
                    ? [
                        styles.fullPage, {justifyContent: 'center',
                        alignItems: 'center'}
                    ]
                    : [
                        styles.fullPage,
                        styles.noDisplay,
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
        overflow: 'hidden',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,

    },
    bkImgContainer: {
        flex: 1,
        position: 'relative'
    },
    bkImg:{
      flex: 1,
      width: null,
      height: null,
    //  resizeMode: 'cover'
    },
    innerPage: {
      flex: 1,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,

    }


}

export default Login
