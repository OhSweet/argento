import { requestBase } from "../requestBase"

class Fragments {
	getNearby({longitude, latitude}) {
		return requestBase.makeCall( "GET", "/fragments", null, null, {
			'x-long': longitude,
			'x-lat': latitude
		}).then((response) => response.data)
	}
	getById (id){
		return requestBase.makeCall("GET", "/fragments/" + id)
	}
	create(fragment) {
		return requestBase.makeCall("POST", "/fragments", fragment)
	}
}

export let fragments = new Fragments( )
