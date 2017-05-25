// STATELESS DUMB COMPONENT
import React from "react"
import MapView from 'react-native-maps'
import Icon from 'react-native-vector-icons/FontAwesome'
import {View} from "react-native"
let imageSource = null
Icon.getImageSource( 'circle', 20, 'red' ).then( ( source ) => imageSource = source )

const MyLocationMarker = (fragments) => {

	let filtered = fragments.filter((obj) => {
		return obj.location && obj.location.latitude
	})

	if (!filtered.length) return null

	return (<View>
		{ filtered.map((fragment, key) => {

			return ( <MapView.Marker
				key={key}
				coordinate={{
				latitude: fragment.location.latitude,
				longitude: fragment.location.longitude
			}}
				title={fragment.title}
				description={fragment.description}
				/> )
		})}
	</View>)
	// return ( <MapView.Marker
	// 	coordinate={{
	// 	latitude: filtered[0].location.latitude,
	// 	longitude: filtered[0].location.longitude
	// }}
	// 	title="title"
	// 	description="? desc"
	// 	/> )
}

export default MyLocationMarker

// Icon.getImageSource('user', 20, 'red').then((source) =
