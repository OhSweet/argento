import React, {
	Component
}
from 'react';
import {
	fragments
}
from "../../services/fragments"
import {
	location
}
from "../../services/location"

import Renderer from "./renderer.js"


class Create extends Component {
	constructor( props ) {
		super( props )
		this.state = {
			busy: false,
			title: null,
			description: null
		}
		this.render = Renderer.bind( this )
	}

	createFragment() {
		this.setState( {
			busy: true
		} )

		location.getCurrent()
			.then( ( coords ) => {
				return fragments.create( {
					title: this.state.title,
					description: this.state.description,
					icon: this.state.icon,
					location: {
						latitude: coords.latitude,
						longitude: coords.longitude
					}
				} )
			} )
			.then( ( response ) => {
				this.setState( {
					busy: false
				} )
			} )
	}
}

export default Create
