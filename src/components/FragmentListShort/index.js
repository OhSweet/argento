import React, { Component } from 'react'
import {
	Text,
	View,
	TouchableWithoutFeedback,
	Button,
	StyleSheet,
	Image,
	ListView,
	Alert
} from 'react-native';

import { Divider, Icon, Card } from 'react-native-material-ui'
import styles from './styles.js'
import routes from "../../routes.js"

import { fragments } from "../../services/fragments"

var ds = new ListView.DataSource({
	rowHasChanged: ( r1, r2 ) => r1 !== r2
})

class FragmentListShort extends Component {
	constructor( props ) {
		super( props )
		//console.warn("fragments props are CRIS", this.props.fragments)
		this.state = {
			dataSource: ds.cloneWithRows( this.props.fragments )
		}
	}
	onPressItem( fragmentId ) {
		routes.viewFragment.fragmentId = fragmentId
		this.props.navigator.replace({
			...routes.viewFragment
		});
	}

	removeFragment( fragmentId) {

		fragments.remove(fragmentId)

		let newFrags = this.props.fragments.filter((fragment) => {
			return (fragment._id != fragmentId)
		})
		this.setState({
			dataSource: ds.cloneWithRows(newFrags)
		})

	}

	render( ) {
		return (
			<ListView
				dataSource={  this.state.dataSource }
				renderRow={( rowData ) => (
					<View style={ styles.card } elevation={1}>

						<View style={styles.leftView} elevation={3}>
							<View style={ styles.internalLeftView}>
								<Icon name={rowData.display.icon} size={20}/>
							</View>
						</View>

						<View style={styles.connector} elevation={3}>
							<View style={ styles.connectorInternal }>
								<View style={styles.upperLine}>
								</View>
							</View>
						</View>

						<View style={styles.connector2} elevation={3}>
							<View style={ styles.connectorInternal }>
								<View style={styles.upperLine}>
								</View>
							</View>
						</View>
						<Card>
							<View style={styles.container}>
								<View style={styles.rightView}>
									<Text onPress={this.onPressItem.bind( this, rowData._id )} style={styles.titleStyle}>
										{rowData.display.title}
									</Text>
									<Text style={styles.textStyle} ellipsizeMode='tail' numberOfLines={1}>{rowData.display.description}</Text>
								</View>

								<TouchableWithoutFeedback
									onPress={() => {
										Alert.alert( "Are you sure ?", "Attempting to delete a fragment", [
											{
												text: 'Yes',
												onPress: ( ) => {
													this.removeFragment.call(this, rowData._id)
												}
											},
											{
												text: 'Cancel',
												style: 'cancel'
											}
										], { cancelable: true })
									}}
									>
									<View style={styles.detailsview}>

										<Icon  styles={styles.iconStyle} color='lightblue' name="delete" size={30}/>
									</View>
								</TouchableWithoutFeedback>


							</View>
						</Card>
					</View>

			)}/>
		);
	}
}

export default FragmentListShort
