// STATELESS DUMB COMPONENT
import React from "react"
import MapView from 'react-native-maps'
import Icon from 'react-native-vector-icons/FontAwesome'

let imageSource = null
Icon.getImageSource( 'location-arrow', 20, 'blue' ).then( ( source ) => imageSource = source )

const MyLocationMarker = ({ latitude, longitude }) => {
	return ( <MapView.Marker
		key={-1}
		coordinate={{
		latitude: latitude,
		longitude: longitude
	}}
		title="title"
		description="? desc"
		image={imageSource}/> )
}

export default MyLocationMarker

// Icon.getImageSource('user', 20, 'red').then((source) =
