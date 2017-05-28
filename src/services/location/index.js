import {
	AsyncStorage
} from "react-native"

class Location {

	constructor() {}

	getCurrent() {
		return new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition((position) => {
				resolve(position.coords)
			}, (error) => null );
		})
	}


}

const location = new Location()
export default location
