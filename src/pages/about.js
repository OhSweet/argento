
import React, {Component} from 'react';

import {Text, View, Navigator, TouchableHighlight, Button, StyleSheet } from 'react-native';

class About extends Component{
render(){
  return(
    <View style={styles.container}>
      <Text style={styles.titleText}>This is my About Page</Text>
    </View>

  )
}



}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dddfd4'
  },
   titleText: {
      flex: 5,
      fontSize: 52,
      fontFamily: 'HelveticaNeue-CondensedBold',
      paddingTop: 40,
      paddingRight: 20,
      paddingLeft: 20,
      color: '#173e43'
    }
})
export default About
