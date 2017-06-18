import React, { Component } from 'react'
import {
	Text,
	View,
	TouchableHighlight,
	Button,
	StyleSheet,
	Image,
	ListView
} from 'react-native';

import { Divider, Icon, Card } from 'react-native-material-ui'
import styles from './styles.js'
import routes from "../../routes.js"

var ds = new ListView.DataSource({
	rowHasChanged: ( r1, r2 ) => r1 !== r2
})

class FragmentList extends Component {
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
	render( ) {
		return (
			<ListView
				dataSource={  ds.cloneWithRows( this.props.fragments ) }
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
						<Card
							onPress={this.onPressItem.bind( this, rowData._id )}>
							<View style={styles.container}>
								<View style={styles.rightView}>
									<Text style={styles.titleStyle}>
										{rowData.display.title}
									</Text>
									<Text style={styles.textStyle} ellipsizeMode='tail' numberOfLines={1}>{rowData.display.description}</Text>
								</View>

								<View style={styles.detailsview}>
									{
										rowData.content.type === 'richtext' ? (
											<Icon styles={styles.iconStyle} color='lightblue' name="chat" size={15}/>
										): (
											<Icon styles={styles.iconStyle} color='lightblue' name="settings-overscan" size={15}/>
										)
									}
									{
										rowData.content.discovery === 'beacon'
										? (
											<Icon styles={styles.iconStyle} color='lightgreen' name="wifi-tethering" size={15}/>
										)
										: null
									}
									{ rowData.display.protected ? (
										<Icon style={styles.iconStyle} color='orange' name="lock" size={15}/>
									): null }

								</View>


							</View>
						</Card>
					</View>
			)}/>
		);
	}
}

export default FragmentList
