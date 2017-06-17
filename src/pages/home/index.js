import React, { Component  } from 'react';
import { Text, View, TouchableHighlight, ScrollView } from 'react-native'
import MapView from "react-native-maps"
import { Button } from "react-native-material-ui"
import Icon from 'react-native-vector-icons/FontAwesome'

import FragmentList from "../../components/FragmentList"
import MyLocationMarker from "../../components/MyLocationMarker"
import FragmentLocationDrawer from "../../components/FragmentLocationDrawer"

import location from "../../services/location"
import { fragments } from "../../services/fragments"

import styles from "./styles.js"

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

		location.getCurrent( ).then(( coords ) => {
			let newState = Object.assign({}, this.state, {
				currentPosition: {
					latitude: coords.latitude,
					longitude: coords.longitude
				}
			})
		})

		this.watchID = navigator.geolocation.watchPosition(( lastPosition ) => {
			let coords = lastPosition.coords
			fragments.getNearby( coords ).then(( fragments ) => {
				let newState = Object.assign({}, this.state, {
					currentPosition: {
						latitude: coords.latitude,
						longitude: coords.longitude
					},
					fragments: fragments
				})

				this.setState( newState )

			})
		}
	)
	}
	componentWillUnmount( ) {
		navigator.geolocation.clearWatch( this.watchID );
	}

	render( ) {
		return (
			<View style={{
				flex: 1
			}}>
				<View style={{ flex: 1}}>
					<MapView.Animated
						ref={( ref ) => this.mapRef = ref}
						style={styles.map}
						zoomEnabled={false}
						scrollEnabled={false}
						loadingEnabled={true}
						rotateEnabled={false}
						region={{
						latitude: this.state.currentPosition.latitude,
						longitude: this.state.currentPosition.longitude,
						latitudeDelta: 0.001100,
						longitudeDelta: 0.000500
					}}>
						<View>
							{MyLocationMarker( this.state.currentPosition )}
						</View>
						<View>
							{FragmentLocationDrawer( this.state.fragments )}
						</View>
						<View>
							{/* TODO this circle needs his own shit */}
							<MapView.Circle radius={50} center={this.state.currentPosition} fillColor="rgba(90, 200, 255, 0.2)" strokeWidth={0}/>

							<MapView.Circle radius={52} center={this.state.currentPosition} fillColor="rgba(90, 200, 255, 0.2)" strokeWidth={0}/>

						</View>
					</MapView.Animated>
					<View style={styles.divider}></View>

				</View>

				{/* TODO this piece needs to be moved into dumb components, style needs to be moved away */}
				<ScrollView style={styles.list} overScrollMode="always">
					{
						this.state.fragments.length ? (
							<FragmentList {...this.props} fragments={ this.state.fragments } />
						):
						( <Text> No fragments </Text> )
					}
				</ScrollView>
			</View>
		)
	}
}

export default Home
