import React, { Component } from 'react';
import MapView from "react-native-maps"
import styles from "./styles.js"
import { location } from "../../services/location"
import {
	Text,
	View,
	Navigator,
	TouchableHighlight,
	Button,
	ScrollView
} from 'react-native';
import MyLocationMarker from "../../components/MyLocationMarker"

class Home extends Component {

	constructor( props ) {
		super( props )
		this.state = {
			latitude: 25,
			longitude: 43
		}
		this.setUpLocationListener.call(this)
	}

	setUpLocationListener() {
		location.onLocationChange((coords) => {
			this.setState({
				latitude: coords.latitude,
				longitude: coords.longitude
			})
			// location.unsubscribe()
		})
	}
	render( ) {
		return (
			<View style={{
				flex: 1
			}}>
				<MapView
					style={styles.map}
					initialRegion={{
					latitude: this.state.latitude,
					longitude: this.state.longitude,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421
				}}
					region={{
					latitude: this.state.latitude,
					longitude: this.state.longitude,
					latitudeDelta: 0.000922,
					longitudeDelta: 0.0004421
				}}>
					{ MyLocationMarker(this.state) }

				</MapView>
				<ScrollView style={styles.list}></ScrollView>
			</View>
		);
	}

}
export default Home
