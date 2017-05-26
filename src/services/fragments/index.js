import { requestBase } from "../requestBase"

class Fragments {
	getNearby( ) {
		return requestBase.makeCall( "GET", "/fragments" ).then((response) => response.data)
	}
	create(fragment) {
		return requestBase.makeCall("POST", "/fragments", fragment)
	}
}

export let fragments = new Fragments( )
