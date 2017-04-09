import React, {Component} from 'react';

import {Text, View, Navigator, TouchableHighlight, StyleSheet,TextInput} from 'react-native';

class UserInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: ""
    }
  }

    render() {
//tb sa am ceva ce sa returneze altfel navigatorul pune null. si da eroare aplicatia
        return ( <View style={styles.container}>
          <Text >Insert your age</Text>
            <Text> This what you entered {this.state.text}</Text>
          <TextInput style={styles.input}
            onChangeText={ (text)=> {
              //console.warn('hi', JSON.stringify(text))
              return
                this.setState({text})} }
          value={this.state.text}/>


          <Text style={styles.buttonText}>lalalala </Text>

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
  regularText: {
    fontFamily: 'fantasy',
    color: '#173e43'

  },
  buttonText: {
    fontFamily: 'HelveticaNeue-CondensedBold',
    color: 'black'
  },
  input: {
    width: 100,
    height: 40,
    borderColor: '#173e43',
    borderWidth: 2,
    textAlign: 'center'

  }

})

export default UserInfo
