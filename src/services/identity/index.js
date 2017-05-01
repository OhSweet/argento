import { AsyncStorage } from "react-native"

class Identity {

	constructor() {
		this.userinfo = null;
		this.token = null;
	}

// ------------------------ METHODS FOR TOKEN

	setToken( token ) {
		this.token = token
		return AsyncStorage.setItem( 'sessionToken', token )
	}

	getToken( ) {
		let found = this.token
		if ( found ) {
			return new Promise(( resolve, reject ) => {
				resolve( found )
			})
		}
		return AsyncStorage.getItem( 'sessionToken' )
	}

	removeToken( ) {
		this.token = null
		return AsyncStorage.removeItem( 'sessionToken' )
	}

	setUserinfo( userinfo ) {
		this.userinfo = userinfo
		return AsyncStorage.setItem('sessionUserinfo', JSON.stringify( userinfo ))
	}

// ------------------------ METHODS FOR USERINFO

	getUserInfo( ) {
		let found = this.userinfo
		if ( found ) {
			return new Promise(( resolve, reject ) => {
				resolve( found )
			})
		}
		return AsyncStorage.getItem( 'sessionUserinfo' ).then(( userinfo ) => JSON.parse( userinfo ))
	}

}
export let identity = new Identity( )
