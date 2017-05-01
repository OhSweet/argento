import { requestBase } from "../requestBase"

class Fragments {
	getAll( ) {
		return requestBase( "GET", "/fragments" )
	}
	create(fragment) {
		return requestBase("POST", "/fragments", fragment)
	}
}

export let fragments = new Fragments( )
