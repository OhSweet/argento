import React, { Component  } from 'react';
import { Text, View, ScrollView } from 'react-native'
import FragmentListShort from "../../components/FragmentListShort"
import { fragments } from "../../services/fragments"
import styles from "./styles.js"

class Home extends Component {

	constructor( props ) {
		super( props )
		this.state = {
			fragments: [ ],
			busy : true
		}
		this.refresh.call(this)
	}

	refresh(){
			fragments.getOwn().then(( fragments ) => {
				let newState = Object.assign({}, {
					fragments: fragments,
					busy     : false
				})
				this.setState( newState )
			})
	}

	render( ) {
		return (
			<View style={{
				flex: 1
			}}>
				{
					this.state.busy ? (
						<Text> Loading .. </Text>
					) :(
						<ScrollView style={styles.list} overScrollMode="always">
							{
								this.state.fragments.length ? (
									<FragmentListShort {...this.props} fragments={ this.state.fragments } />
								):
								( <Text> No fragments </Text> )
							}
						</ScrollView>
					)
				}

			</View>
		)
	}
}

export default Home
