import React, {Component} from 'react';

import {AppRegistry} from 'react-native';

import App from './src/app.js';

export default class TheOtherSide extends Component {

    render() { return (< App />)
}
}
AppRegistry.registerComponent('TheOtherSide', () => TheOtherSide);
