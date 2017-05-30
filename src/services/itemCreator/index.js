import { requestBase } from "../requestBase"

import location from "../location"

import { fragments } from "../fragments"

class ItemCreator {
	createOnSiteFromModel({ basicInfo, discoveryInfo, contentInfo }) {

		console.warn( 'ON SITE CREATOR', basicInfo, discoveryInfo, contentInfo )

		return location
			.getCurrent( )
			.then(( coords ) => {
				return {
					fragment: {
						location: {
							latitude: coords.latitude,
							longitude: coords.longitude
						}
					},
					content: {}
				}
			})
			.then(({ fragment, content }) => {
				fragment.display = {
					title: basicInfo.title,
					description: basicInfo.description,
					icon: basicInfo.group.icon,
					syncId: basicInfo.group.syncId,
					group: basicInfo.group.text
				}

				fragment.content = {}

				discoveryInfo.discoveryType == 'qr'
					? ( fragment.content.type === 'qr' )
					: ( fragment.content.type = 'richtext' )
				return { fragment, content }
			})
			.then(({ fragment, content }) => {
				content.type = contentInfo.type
				content.body = contentInfo.content
				// content password here in the future ... !!!
				return fragments.create( fragment )

				// return { fragment, content }
			})
	}
}

export let itemCreator = new ItemCreator( )

// THIS IS ONLY FOR DOCUMENTING STRUCTURE { 	basicInfo: { 		title: "..", 		description: "..", 		group: { icon: 'icon', } 	}, 	discoveryInfo: { 		discoveryType: "proximity, qr ,
// beacon", 		password: null or "pass", 		distance: 50 (Default or more), // only relevant for beacons 	}, 	contentInfo: { 		title: 'Mytitle', 		content: "html or image", 		type:
// "richtext or qr" 	}
//
// }
