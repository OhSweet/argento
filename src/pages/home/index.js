import React, { Component } from 'react';
import MapView from "react-native-maps"
import styles from "./styles.js"
import { location } from "../../services/location"
import { fragments } from "../../services/fragments"

import {
	Text,
	View,
	Navigator,
	TouchableHighlight,
	Button,
	ScrollView
} from 'react-native';

import MyLocationMarker from "../../components/MyLocationMarker"
import FragmentLocationDrawer from "../../components/FragmentLocationDrawer"

class Home extends Component {

	constructor( props ) {
		super( props )
		this.state = {
			currentPosition: {
				latitude: 25,
				longitude: 43
			},
			fragments: [ ]
		}
	}

	componentDidMount( ) {
		location.onLocationChange(( coords ) => {
			fragments.getNearby( ).then(( fragments ) => {
				let newState = Object.assign({}, this.state, {
					currentPosition: {
						latitude: coords.latitude,
						longitude: coords.longitude
					},
					fragments: fragments
				})

				this.setState( newState )

			})

		})
	}
	componentWillUnmount( ) {
		location.unsubscribe( )
	}

	render( ) {
		return (
			<View style={{
				flex: 1
			}}>
				<MapView
					style={styles.map}
					initialRegion={{
					latitude: this.state.currentPosition.latitude,
					longitude: this.state.currentPosition.longitude,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421
				}}
					region={{
					latitude: this.state.currentPosition.latitude,
					longitude: this.state.currentPosition.longitude,
					latitudeDelta: 0.000922,
					longitudeDelta: 0.0004421
				}}>
					<View>
						{ MyLocationMarker(this.state.currentPosition) }
					</View>
					<View>
						{ FragmentLocationDrawer(this.state.fragments) }
					</View>
				</MapView>
				<ScrollView style={styles.list}></ScrollView>
			</View>
		);
	}

}
export default Home
