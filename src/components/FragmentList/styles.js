import { StyleSheet } from "react-native"

export default styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderTopWidth: 0,
		borderBottomColor: 'white',
		flexWrap: 'wrap',

	},
	leftView:{
		flex:1,
		width: 50,
		left: 5,
		padding: 5,
		alignItems: 'center',
		backgroundColor: 'lightblue',
		position: 'absolute',
		marginTop: 10,
		marginBottom: 10
	},
	internalLeftView: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		height: 37,
		flex: 1,
	},
	rightView: {
		marginLeft: 55,
		paddingLeft: 10,
		paddingRight: 5,
		paddingBottom: 10,
		paddingTop: 10,
	},
	textStyle:{
		flexWrap: 'wrap',
	},
	titleStyle:{
		fontWeight: 'bold',
		fontStyle: 'italic'
	},
	card: {
		marginLeft: 5,
		marginRight: 5
	},
	connector: {
		height: 20,
		width: 50,
		left: 5,
		bottom: 0,
		position: 'absolute'
	},
	connector2: {
		height: 4,
		width: 50,
		left: 5,
		top: 0,
		position: 'absolute'
	},
	connectorInternal: {
		height: 20,
		width: 50,
		backgroundColor: 'transparent',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	upperLine: {
		backgroundColor: 'lightblue',
		height: 20,
		width: 4
	}
});
