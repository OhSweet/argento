import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
var Icon = require('react-native-vector-icons/FontAwesome');

/**
  Example FBLoginView class
  Please note:
  - this is not meant to be a full example but highlights what you have access to
  - If you use a touchable component, you will need to set the onPress event like below
**/
class FBLoginView extends Component {
    static contextTypes = {
        isLoggedIn: React.PropTypes.bool,
        login: React.PropTypes.func,
        logout: React.PropTypes.func,
        props: React.PropTypes.object
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{left:0, right:0, minWidth:240}}>
                <Icon.Button
                    onPress={() => {
                    if (!this.context.isLoggedIn) {
                        this.context.login()
                    } else {
                        this.context.logout()
                    }
                }}
                    color={"#ffffff"}
                    backgroundColor={"#3B5998"}
                    name={"facebook"}
                    size={20}>
                    <View
                        style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        left:0,
                        right:0
                    }}>
                        <Text style={{
                          color: 'white',
                        fontWeight: 'bold'
                      }}>Register with Facebook</Text>
                    </View>
                </Icon.Button>
            </View>
        )
    }
}

module.exports = FBLoginView;
