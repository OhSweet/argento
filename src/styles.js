import { StyleSheet } from "react-native"

export default styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	map: {
		flex: 3
	},
	list: {
		flex: 1
	},
	statusBar: {
		height: 24
	}
});
