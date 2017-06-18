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
		.then((response) => response.data)

	}
	create(fragment) {
		return requestBase.makeCall("POST", "/fragments", fragment)
	}

	getOwn (){
		return requestBase.makeCall("GET", "/fragments?own=true")
	}

}

export let fragments = new Fragments( )
