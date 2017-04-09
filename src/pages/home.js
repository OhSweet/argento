import React, {Component} from 'react';

import {Text, View, Navigator, TouchableHighlight, StyleSheet} from 'react-native';

class Home extends Component {
	constructor(props){
		super(props)
	}
	render() {
        return (
          <View style={styles.container}>
			  <Text style={styles.buttonText}>Some dynamic content on the HOME PAGE</Text>


			  {
					this.props.navigator.getCurrentRoutes().map(
						(route) => (<Text style={styles.buttonText}> { route.name }</Text>)

			)
		}
			  			  <Text style={styles.buttonText}>You can limit the stack by making sur you navigator.pop() when navigating before pushing, if the number is > certain threshold </Text>
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
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#3fb0ac'
  },
  buttonText: {
    fontFamily: 'HelveticaNeue-CondensedBold',
    color: 'black'
  }

})

export default Home
