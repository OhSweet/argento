// STATELESS DUMB COMPONENT
import React from "react"
import { Alert, AsyncStorage } from "react-native"

const BeaconAlert = ( fragments ) => {

	let visitedBeacons = null

	AsyncStorage.getItem('visitedBeacons')
	.then((string) => {
		visitedBeacons = JSON.parse(string)
		start()
	})
	.catch((err) => {
		AsyncStorage.setItem('visitedBeacons', '{}' )
		visitedBeacons = {}
		start()
	})

	let start = () => {
		let beacons = fragments.filter(( fragment ) => {
			return fragment.content.discovery === 'beacon'
		})

		let alerted = false

		beacons.forEach(( beacon ) => {
			if (!visitedBeacons[beacon._id] && !alerted) {
				Alert.alert( "Beacon detected: " + beacon.display.title, beacon.display.description, [
					{
						text: 'Dismiss',
						onPress: ( ) => console.log( 'Cancel Pressed' ),
						style: 'cancel'
					}, {
						text: 'See more',
						onPress: ( ) => console.log( 'Visist pressed' )
					}
				], { cancelable: true })

				alerted = true
				visitedBeacons[beacon._id] = true
			}
		})
		console.log('BEACOn is', visitedBeacons)
		AsyncStorage.setItem('visitedBeacons', JSON.stringify(visitedBeacons)).then(() => {
			AsyncStorage.getItem('visitedBeacons').then((item) => console.log("got stored item", item))
		})
	}

}

export default BeaconAlert
