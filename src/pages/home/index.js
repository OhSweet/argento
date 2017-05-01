import React, { Component } from 'react';
import MapView from "react-native-maps"
import styles from "./styles.js"
import {
	Text,
	View,
	Navigator,
	TouchableHighlight,
	Button,
	ScrollView
} from 'react-native';

class Home extends Component {

	constructor( props ) {
		super( props )
		this.state = {
			latitude: 25,
			longitude: 43
		}
	}

	watchID :
		? number = null;

	componentDidMount( ) {
		navigator.geolocation.getCurrentPosition(( position ) => {
			this.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude });
		}, ( error ) => console.warn(JSON.stringify( error )), {
			enableHighAccuracy: true,
			timeout: 20000,
			maximumAge: 1000
		});

		this.watchID = navigator.geolocation.watchPosition(( position ) => {
			console.warn( "position is", position )
			this.setState({ latitude: position.coords.latitude, longitude: position.coords.longitude });
		});
	}

	componentWillUnmount( ) {
		navigator.geolocation.clearWatch( this.watchID );
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
					<MapView.Marker
						coordinate={{
						latitude: this.state.latitude,
						longitude: this.state.longitude
					}}
						title="title"
						description="? desc"/>

				</MapView>
				<ScrollView style={styles.list}></ScrollView>
			</View>
		);
	}

}
export default Home
