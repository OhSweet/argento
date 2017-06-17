import { requestBase } from "../requestBase"

import location from "../location"

import { fragments } from "../fragments"

class ItemCreator {
	createOnSiteFromModel({ basicInfo, discoveryInfo, contentInfo }) {

		return location
			.getCurrent( )
			.then(( coords ) => {
				return {
					fragment: {
						location: {
							latitude: coords.latitude,
							longitude: coords.longitude
						},
						geo:[ Number(coords.longitude), Number(coords.latitude)]
					},
				}
			})
			.then(({ fragment }) => {
				fragment.display = {
					title: basicInfo.title,
					description: basicInfo.description,
					icon: basicInfo.group.icon,
					syncId: basicInfo.group.syncId,
					group: basicInfo.group.text,
					protected: !!discoveryInfo.password,
					distance: discoveryInfo.distance
				}

				fragment.content = {}

				discoveryInfo.discoveryType === 'qr'
					? ( fragment.content.type = 'qr' )
					: ( fragment.content.type = 'richtext' )

				discoveryInfo.discoveryType === 'beacon'
					? (fragment.content.discovery = 'beacon')
					: (fragment.content.discovery = 'default')

				return { fragment }
			})
			.then(({ fragment }) => {
				fragment.content.body = contentInfo.content
				fragment.content.password = discoveryInfo.password
				// content password here in the future ... !!!
				console.warn('final fragment is', fragment)
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
