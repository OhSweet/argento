import React, { Component } from 'react';
import MapView from "react-native-maps"
import {
	Text,
	View,
	Navigator,
	TouchableHighlight,
	Button,
	StyleSheet
} from 'react-native';

class About extends Component {
	render( ) {
		return (
	      <MapView
	        style={ styles.map }
	        initialRegion={{
	          latitude: 37.78825,
	          longitude: -122.4324,
	          latitudeDelta: 0.0922,
	          longitudeDelta: 0.0421,
	        }}
	      />
	    );
	}

}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 120,
  },
});
export default About
