import {
	View,
	Text
} from "react-native"
import React, {
	Component
} from 'react'

const InfoTexts = (discoveryType) => {
	return(
		<View>
			{
				discoveryType === 'proximity' ? (
					<Text>
						This means only users that are in the area can discovery your fragment no the map and access it's contents.
					</Text>)
				: null
			}
			{
				discoveryType === 'qr' ? (
					<Text>
						This enables you to create a qr code based on an image or gif, that will pop up when scanning the code in the physical location. We will provide you with the QbR-code image
					</Text>)
				: null
			}
			{
				discoveryType === 'beacon' ? (
					<Text>
						We will let users know about it with a push notification once they pass arond the area :). This has a longer range than normal location discovery.
					</Text>)
				: null
		}
	</View>

	)
}

export default InfoTexts
