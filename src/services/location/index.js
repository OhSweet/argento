import { AsyncStorage } from "react-native"

class Location {

	constructor( ) {
		this.timeout = null
		this.pollingInterval = 5000
		this.options = {
			enableHighAccuracy: false,
			timeout: 20000,
			maximumAge: 1000
		}
	}

	getCurrent( ) {
		return new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition( ( position ) => {
				resolve(position.coords)
			}, ( error ) => console.log(JSON.stringify( error )), this.options );
		})
	}

	onLocationChange( cb ) {
		// We bind the interval to a variable so we can unsubscribe
		this.timeout = setInterval( () => this.getCurrent( ).then(( coords ) => cb( coords )), this.pollingInterval )
	}
	unsubscribe() {
		// We call unsubscribe manually when no longer needed because it might cause memory leak
		clearInterval(this.timeout)
	}
}
export let location = new Location( )
