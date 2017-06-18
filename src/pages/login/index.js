import React, { PropTypes, Component } from 'react';
import {
	Text,
	View,
	TouchableHighlight,
	Button,
	StyleSheet,
	Image,
	Dimensions
} from 'react-native';
import { FBLogin, FBLoginManager } from 'react-native-facebook-login';
import FBLoginView from './FBLoginView.js'
import { identity } from "../../services/identity"
import { Icon } from 'react-native-material-ui'
const window = Dimensions.get( 'window' )
const appLogo = require( '../../assets/theOtherSideLogo.png' )
const bkImg = require( '../../assets/background.jpg' )

class Login extends Component {
	constructor( props ) {
		super( props )
		this.state = {
			loggedIn: false,
			busy: true
		}
		this.checkIdentity.call( this )
	}

	checkIdentity( ) {
		let self = this

		identity.getToken( ).then(( token ) => {
			if ( token ) {
				this.redirectToHome.call( self );
			} else {
				this.setState({ busy: false })
			}
		})
	}

	redirectToHome() {
		//console.log("props in redirect is", this.props)

		this.props.navigator.replace(this.props.routes.home)
	}

	onLogin( data ) {
		// console.log( "data is", data );
		identity.setToken( data.credentials.token );
		identity.setUserinfo( data.profile )
		this.checkIdentity.call( this )
		// this.redirectToHome.call( this ) this.setState({ user: data, loggedIn: true, profilePic: data.profile.picture.data.url });
	}
	onLoginFound( data ) {
		this.redirectToHome.call(this)
	}

	onLogout( ) {}
	onLoginError( ) {}
	onLoginCancel( ) {}
	onLoginNotFound( ) {}
	render( ) {
		return (
			<View style={styles.flexDefault}>
				<View style={this.state.busy
					? [ styles.fullPage, styles.noDisplay ]
					: styles.fullPage}>

					<View style={styles.bkImgContainer}>
						<Image source={bkImg} style={styles.bkImg}/>
					</View>

					<View style={styles.innerPage}>

						<View style={styles.viewStyleOne}>
							<Text style={styles.defaultTextStyle}>The</Text>
							<Image source={appLogo} style={styles.logoStyle}/>
							<Text style={styles.defaultTextStyle}>therSide</Text>
						</View>

						<View style={styles.rowFlex}>

							<FBLogin
								style={styles.fblogin}
								buttonView={< FBLoginView />}
								ref={( fbLogin ) => {
								this.fbLogin = fbLogin
							}}
								permissions={[ "email", "user_friends" ]}
								loginBehavior={FBLoginManager.LoginBehaviors.Native}
								onLogin={this.onLogin.bind( this )}
								onLoginFound={this.onLoginFound.bind( this )}
								onLoginNotFound={this.onLoginNotFound.bind( this )}/>

						</View>
					</View>

				</View>

				<View
					style={this.state.busy
					? [
						styles.fullPage, {
							justifyContent: 'center',
							alignItems: 'center'
						}
					]
					: [ styles.fullPage, styles.noDisplay ]}>
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
		bottom: 0
	},
	bkImgContainer: {
		flex: 1,
		position: 'relative'
	},
	bkImg: {
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
		bottom: 0
	},
	viewStyleOne: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: -400
	},
	defaultTextStyle: {
		fontWeight: 'bold',
		color: 'black',
		marginRight: -4,
		fontSize: 25
	},
	logoStyle: {
		width: 50,
		height: 50
	},
	rowFlex: {
		flex: 1,
		flexDirection: 'row',
		top: 0
	},
	fblogin: {
		width: null,
		height: 300,
		paddingTop: 50,
		marginBottom: 0,
		left: 0,
		right: 0
	},
	flexDefault: {
		flex: 1
	}

}

export default Login
