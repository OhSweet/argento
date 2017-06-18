import React, { Component } from 'react';
import { Text, View, WebView, StyleSheet } from 'react-native';
import { fragments } from "../../services/fragments";
import MapView from "react-native-maps";
import MyLocationMarker from "../../components/MyLocationMarker";
import FragmentLocationDrawer from "../../components/FragmentLocationDrawer";
import Icon from 'react-native-vector-icons/FontAwesome';
import Prompt from 'react-native-prompt'

class ViewFragment extends Component {
	constructor( props ) {
		super( props )
		this.state = {
			fragmentId: this.props.route.fragmentId,
			busy: true
		}
		console.log( "this props", this.props )
		this.getFragmentContent.call( this )
	}

	getFragmentContent( ) {
		fragments.getByIdWithPass( this.state.fragmentId, this.props.route.contentPass ).then(( fragment ) => {
			console.log( "got fragment", fragment )
			let newState = Object.assign({}, this.state, {
				fragment: fragment,
				latitude: parseFloat( fragment.location.latitude ),
				longitude: parseFloat( fragment.location.longitude ),
				title: fragment.display.title,
				description: fragment.display.description,
				category: fragment.display.group,
				protected: fragment.display.protected,
				icon: fragment.display.icon,
				type: fragment.content.type,
				contentBody: fragment.content.body,
				password: fragment.display.password,
				busy: false
			})

			if ( !!fragment.display.protected && !fragment.content.body ) {
				newState.shouldDisplayPrompt = true
				newState.busy = true
			}
			this.setState( newState )
		}).catch(( ) => {
			this.setState({ shouldDisplayPrompt: true })
		})

	}

	render( ) {
		return (
			<View style={{
				flex: 1
			}}>
				<Prompt
					title="Enter password"
					placeholder="Start typing"
					visible={this.state.shouldDisplayPrompt}
					onCancel={( ) => {
					this.props.navigator.replace( this.props.routes.home )
				}}
					onSubmit={( value ) => {
					this.props.route.contentPass = value;
					this.props.navigator.replace({
						...this.props.route
					})
				}}/>

				<View style={this.state.busy
					? [ styles.fullPage, styles.noDisplay ]
					: styles.fullPage}>
					<View style={{
						flex: 1
					}}>
						{this.state.busy
							? null
							: (
								<MapView.Animated
									zoomEnabled={false}
									scrollEnabled={false}
									loadingEnabled={true}
									rotateEnabled={false}
									region={{
									latitude: this.state.latitude,
									longitude: this.state.longitude,
									latitudeDelta: 0.005100,
									longitudeDelta: 0.001000
								}}
									style={styles.map}>
									{FragmentLocationDrawer([ this.state.fragment ])}
								</MapView.Animated>
							)
}

					</View>
					<View style={{
						flex: 1
					}}>
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
