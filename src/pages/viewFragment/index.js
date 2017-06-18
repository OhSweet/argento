import React, { Component } from 'react';
import { Text, View, WebView, StyleSheet } from 'react-native';
import { fragments } from "../../services/fragments";
import MapView from "react-native-maps";
import MyLocationMarker from "../../components/MyLocationMarker";
import FragmentLocationDrawer from "../../components/FragmentLocationDrawer";
import Icon from 'react-native-vector-icons/FontAwesome';

class ViewFragment extends Component {
	constructor( props ) {
		super( props )
		this.state = {
			fragmentId: this.props.route.fragmentId,
			latitude: 37.78825,
			longitude: -122.4324,
			busy: true
		}
		this.getFragmentContent.call(this)
	}


getFragmentContent(){
	fragments.getById(this.state.fragmentId).then(( fragment ) => {
		let newState = Object.assign({}, this.state, {
			fragment: fragment,
			latitude: fragment.location.latitude,
			longitude: fragment.location.longitude,
			title: fragment.display.title,
			description: fragment.display.description,
			category: fragment.display.group,
			protected: fragment.display.protected,
			icon: fragment.display.icon,
			type: fragment.content.type,
			contentBody: fragment.content.body,
			password: fragment.display.password,
			busy: false
		}
	)
		this.setState( newState )

	})

}




	render( ) {
		return (
			<View style={{
				flex: 1
			}}>

			<View style={this.state.busy
				? [ styles.fullPage, styles.noDisplay ]
				: styles.fullPage}>
				<View style={{ flex: 1 }}>
					<MapView

											region={{
												latitude: this.state.longitude,
												longitude: this.state.longitude,
												latitudeDelta: 0.001100,
												longitudeDelta: 0.000500
    										}}
											style={styles.map}/>
				</View>
			<View  style={{ flex: 1}}>
			<WebView source={{
			html: "<p>alalalal</p>"
		}}/>
			</View>
			</View>
			<View
				style={this.state.busy
				? [
					styles.fullPage, {
						justifyContent: 'center',
						alignItems: 'center'
					}
				]
				: [ styles.fullPage, styles.noDisplay ]}>
				<Text>Loading</Text>
			</View>

			</View>

	)

	}
}

const styles = StyleSheet.create({
	map: {
		flex: 1.4
	},
	list: {
		flex: 1,
		backgroundColor: 'transparent'
	},
	divider: {
		backgroundColor: 'lightblue',
		height: 3,
		marginLeft: 9,
		marginRight: 12
	},
	noDisplay: {
		top: window.height,
		bottom: -window.height
	},
	fullPage: {
		position: 'absolute',
		overflow: 'hidden',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	},
	innerPage: {
		flex: 1,
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	}
})

export default ViewFragment
