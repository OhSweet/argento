import { requestBase } from "../requestBase"
import location from "../location"

class ItemCreator {
	createOnSiteFromModel({ basicInfo, discoveryInfo, contentInfo }) {

		console.log('ON SITE CREATOR',basicInfo, discoveryInfo, contentInfo )

		let locationCoords = null

		return location.getCurrent().then((coords) => {
			locationCoords = coords
			console.log("GOT THEM", locationCoords)
		})
	}
}

export let itemCreator = new ItemCreator( )
