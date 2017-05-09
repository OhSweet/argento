import {
	StyleSheet
}
from "react-native"

export default styles = StyleSheet.create({
	heading: {
		fontSize: 20,
		color: "black",
		flexWrap: 'wrap',
		fontFamily: "sans-serif-light",
		left: 55
	},
	serifThin: {
		fontFamily: 'sans-serif-light',
		padding: 10,
		marginLeft: 15,
		marginRight: 15,
		marginTop: 5,
		textAlign: "center"
	},
	iconStyle: {
		position: "absolute",
		top: 20,
		left: 30,
		fontSize: 40
	},
	activeItem: {
		color: 'black',
		fontStyle: 'italic',
		fontWeight: 'bold'
	},
	inactiveItem: {
		color: 'grey',
		fontStyle: 'italic'
	}
});
