export default Utils = {
	objToArray: (obj) => {
		return Object.keys(obj).reduce((acc, key) => {
			return acc.concat(obj[key])
		}, [])
	}
}
