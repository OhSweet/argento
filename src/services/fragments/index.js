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

	getByIdWithPass (id, pass) {
		return requestBase.makeCall("GET", "/fragments/" + id, null, null, {
			'x-content-password': pass
		}).then((response) => response.data)
	}
	create(fragment) {
		return requestBase.makeCall("POST", "/fragments", fragment)
	}

	getOwn (){
		return requestBase.makeCall("GET", "/fragments?own=true")
		.then((response) => response.data)
	}

	remove(id) {
		return requestBase.makeCall("DELETE", "/fragments/" + id)
	}
}

export let fragments = new Fragments( )
