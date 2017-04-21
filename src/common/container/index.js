import { View, StyleSheet } from 'react-native';
import React, { Component, PropTypes } from 'react';

const propTypes = {
    children: PropTypes.node,
};
import styles from "./styles.js"

class Container extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.props.children}
            </View>
        );
    }
}

Container.propTypes = propTypes;

export default Container;
