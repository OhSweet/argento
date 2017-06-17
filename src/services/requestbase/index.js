import axios from "axios"

const baseEndpoint = `http://theotherside.eu-2.evennode.com/api`
import {identity} from "../identity"

class RequestBase {
	constructor() {
		identity.getToken().then((token) => {
			this.accessToken = token
		})
	}

	makeCall( method, endpoint, data, params, headers) {
		let hs = Object.assign(
			{}, headers, {
				Authorization: 'Bearer ' + this.accessToken
			}
		)

		return axios({
			method: method,
			url: `${ baseEndpoint }${ endpoint }`,
			data: data,
			headers: hs
		})
	}

}

export let requestBase = new RequestBase()
