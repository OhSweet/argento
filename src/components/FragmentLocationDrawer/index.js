// STATELESS DUMB COMPONENT
import React from "react"
import MapView from 'react-native-maps'
import Icon from "react-native-vector-icons/MaterialIcons"
import { View } from "react-native"
// import Icon from 'react-native-vector-icons/FontAwesome'

const groups = require( '../../pages/create/BasicInfo/groups.json' )

const iconBitmaps = {}

groups.forEach(( group ) => {
	Icon
		.getImageSource( group.icon, 25, 'black' )
		.then( ( source ) => iconBitmaps[group.icon] = source )
})

const MyLocationMarker = ( fragments ) => {
	let filtered = fragments.filter(( obj ) => {
		return obj.location && obj.location.latitude
	})

	if ( !filtered.length )
		return null

	return (
		<View>{filtered.map(( fragment, key ) => {

			return ( <MapView.Marker
				key={key}
				coordinate={{
					latitude: fragment.location.latitude,
					longitude: fragment.location.longitude
				}}
				title={fragment.display.title}
				description={fragment.display.description}
				image={iconBitmaps[fragment.display.icon]}/> )

		})
		}</View>
	)
}

export default MyLocationMarker
