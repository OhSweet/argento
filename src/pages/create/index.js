import React, {Component} from 'react';
import {fragments} from "../../services/fragments"
import {location} from "../../services/location"
import Renderer from "./renderer.js"
import {itemCreator} from "../../services/itemCreator"

class Create extends Component {
	constructor( props ) {
		super( props )
		this.state = {
			busy: false,
			activeTabIndex: 0
		}
		this.render = Renderer.bind( this )
	}

	onBasicInfoComplete(basicInfo) {
		this.setState({
			basicInfo: basicInfo,
			activeTabIndex: 1
		})
	}

	onDiscoveryInfoComplete(discoveryInfo){
		this.setState({
			discoveryInfo: discoveryInfo,
			activeTabIndex: 2
		})
	}

	onContentInfoComplete(contentInfo){
		this.setState({
			contentInfo
		})
		let { basicInfo, discoveryInfo } = this.state

		return itemCreator.createOnSiteFromModel({ basicInfo, discoveryInfo, contentInfo})

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
