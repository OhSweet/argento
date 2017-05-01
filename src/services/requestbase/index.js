import axios from "axios"

const baseEndpoint = `http://mar-test.eu-2.evennode.com/api`
import identity from "../identity"

class RequestBase {
	constructor() {
		identity.getToken().then((token) => {
			this.accessToken = token
		})
	}

	makeCall( method, endpoint, data, params) {
		return axios({
			method: method,
			url: `${ baseEndpoint }${ endpoint }`,
			data: data,
			headers: {
				Authorization: 'Bearer ' + this.accessToken
			}
		})
	}

}

export let RequestBase = new RequestBase()
