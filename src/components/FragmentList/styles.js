import { StyleSheet } from "react-native"

export default styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: 'white',
		backgroundColor: '#2196f3',
		flexWrap: 'wrap',

	},
	leftView:{
		flex:1,
		alignItems: 'center',
		paddingBottom: 10,
		paddingTop: 10,
	},
	rightView: {
		flex: 6,
		borderLeftWidth: 1,
		borderLeftColor: 'white',
		paddingLeft: 5,
		paddingBottom: 10,
		paddingTop: 10,
	},
	textStyle:{
		color: 'white',
		flexWrap: 'wrap',
	},
	titleStyle:{
		color: 'white',
		fontWeight: 'bold',
		fontStyle: 'italic'
	}
});
