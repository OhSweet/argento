import React, {
	Component
} from 'react'
import {
	View,
	StyleSheet,
	Text,
	TextInput,
	Picker
} from 'react-native'
import {
	Button,
	Divider,
	Container,
	Card,
	BottomNavigation,
	Icon,
	Checkbox
}
from "react-native-material-ui"

import styles from "../styles.js"

class BasicInfo extends Component {
	constructor(props) {
		super(props)
		this.groups = require('./groups.json')

		this.state = {
			busy: false,
			title: "",
			description: "",
			discoveryType: "proximity",
			checkedGroupIndex: 0
		}
	}

	completeData() {
		let icon = this.groups[checkedGroupIndex].icon
		let {
			title,
			description,
			discoveryType
		} = this.state

		this.props.onBasicInfoComplete({
			title,
			description,
			discoveryType,
			icon
		})
	}
	isValidData() {
		return(this.state.description && this.state.title && this.state.discoveryType)
	}
	render() {
		return(
			<View>
				<View style={{ padding: 30 }}>
					<Icon name="face" style={styles.iconStyle}/>

					<Text style={styles.heading}>
						What should a fit title be ?
					</Text>

					<TextInput
						style={styles.serifThin}
						maxLength={25}
						placeholder="Trees in spring"
						onChangeText={( title ) => this.setState({ title })}>
						{this.state.title}
					</TextInput>
				</View>

				<Divider />

				<View style = {{ padding: 30 }} >
					<Icon name="nature" style={styles.iconStyle} />
					<Text style = {styles.heading}>
						Describe your fragment
					</Text>

					<TextInput
						style={styles.serifThin}
						maxLength={ 45 }
						placeholder="Sooo beautiful !"
						onChangeText={( description ) => this.setState({description})}>
						{this.state.description}
					</TextInput>

				</View>
				<Divider/>

				<View style={{ padding: 30 }}>
					<Icon name={groups[this.state.checkedGroupIndex].icon } style={styles.iconStyle} />

					<Text style={styles.heading} >
						Best fit category would be ...
					</Text>
					<View style={{ marginBottom: 25 }}/>
					<Divider/>
					<View style={{ flex: 0.75 , paddingLeft: 25, paddingRight: 25, paddingTop: 25}}>
						{
							groups.map((group) => {
								return (
									<Checkbox
										key={ group.index }
										label={ <Text style={
											this.state.checkedGroupIndex == group.index ? (styles.activeItem) : (styles.inactiveItem)
										}> { group.text }</Text> }
										uncheckedIcon={ group.icon }
										checkedIcon={ group.icon }
										checked={ this.state.checkedGroupIndex == group.index}
										onCheck={ () => this.setState({ checkedGroupIndex: group.index })}
									/>
								)
							})
						}
					</View>
					{/* TODO GROUP NEEDS TO BE HERE */}

				</View>
				<View style={{ padding: 30 }} >
					<Button
						raised
						primary
						text="Next"
						upperCase={false}
						onPress={ this.completeData.bind(this) }
						enabled={ this.isValidData() }>

					</Button>
				</View>
			</View>
		)
	}
}

export default BasicInfo
