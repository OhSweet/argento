import React, {Component} from 'react';
import MapView from "react-native-maps"
import styles from "./styles.js"
import {location} from "../../services/location"
import {fragments} from "../../services/fragments"

import {Text, View, TouchableHighlight, ScrollView} from 'react-native';

import {Button, IconToggle} from "react-native-material-ui"
import MyLocationMarker from "../../components/MyLocationMarker"
import FragmentLocationDrawer from "../../components/FragmentLocationDrawer"
import Icon from 'react-native-vector-icons/FontAwesome';

class Home extends Component {

	constructor(props) {
		super(props)
		this.state = {
			currentPosition: {
				latitude: 25,
				longitude: 43
			},
			fragments: []
		}
	}

	componentDidMount() {
		location.onLocationChange((coords) => {
			fragments
				.getNearby()
				.then((fragments) => {
					let newState = Object.assign({}, this.state, {
						currentPosition: {
							latitude: coords.latitude,
							longitude: coords.longitude
						},
						fragments: fragments
					})

					this.setState(newState)

				})

		})
	}
	componentWillUnmount() {
		location.unsubscribe()
	}

	render() {
		return (
			<View style={{
				flex: 1
			}}>
				<MapView.Animated
					ref={(ref) => this.mapRef = ref}
					style={styles.map}
					initialRegion={{
					latitude: this.state.currentPosition.latitude,
					longitude: this.state.currentPosition.longitude,
					latitudeDelta: 0.000922,
					longitudeDelta: 0.000421
				}}
					region={{
					latitude: this.state.currentPosition.latitude,
					longitude: this.state.currentPosition.longitude,
					latitudeDelta: 0.000922,
					longitudeDelta: 0.000421
				}}>
					<View>
						{MyLocationMarker(this.state.currentPosition)}
					</View>
					<View>
						{FragmentLocationDrawer(this.state.fragments)}
					</View>
					<View>
						{/* TODO this circle needs his own shit */}
						<MapView.Circle radius={50} center={this.state.currentPosition} fillColor="rgba(120, 255, 255, 0.2)" strokeWidth={0.5}/>
					</View>
				</MapView.Animated>
				{/* TODO this piece needs to be moved into dumb components, style needs to be moved away */}
				<View style={{
					flex: 1,
					flexDirection: 'row',
					justifyContent: 'space-between'
				}}>
					<View style={{
						flex: 0.5
					}}>
						<Button
							primary
							icon={< Icon name = "map-marker" size = {
							20
						}
						style={{ margin: 10 }}
						/>}
							onPress={() => {
							this.mapRef.props.region = new MapView.AnimatedRegion({latitude: this.state.currentPosition.latitude, longitude: this.state.currentPosition.longitude});
							this.forceUpdate()
						}}
							text="Center"></Button>
					</View>
					<View style={{
						flex: 0.5
					}}>
						<Button disabled icon={< Icon name = "arrow-circle-down" size = {
							20
						}
						style={{ margin: 10 }}

						 />} primary text="Follow"/>
					</View>

				</View>
				<ScrollView style={styles.list}></ScrollView>
			</View>
		);
	}

}
export default Home
