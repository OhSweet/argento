import {
	AsyncStorage
} from "react-native"

class Location {

	constructor() {
		this.options = {
			enableHighAccuracy: false,
			timeout: 1000,
			maximumAge: 1000
		}
	}

	getCurrent() {
		return new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition((position) => {
				resolve(position.coords)
			}, (error) => null, this.options);
		})
	}


}

const location = new Location()
export default location
