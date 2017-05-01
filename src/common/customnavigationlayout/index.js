import React, {Component} from 'react';

import {
    Text,
    View,
    Navigator,
    TouchableHighlight,
    Button,
    StyleSheet
} from 'react-native';
import Drawer from "react-native-drawer"
import {Toolbar} from "react-native-material-ui"
import Container from "../container"
import DrawerContent from "./DrawerContent"
import styles from "./styles"

class CustomNavigationLayout extends Component {

    constructor(props) {
        super(props)
        this.state = {
            openedDrawer: false
        }
    }

    toggleDrawer() {
        this.setState({
            openedDrawer: !this.state.openedDrawer
        })
    }

    render() {
        return (
            <Container>
                {!this.props.route.hideNavbar
                    ? (<Toolbar
                        leftElement="menu"
                        onLeftElementPress={this.toggleDrawer.bind(this)}
                        centerElement={< Text > {
                        this.props.route.title
                    } < /Text>}/>)
                    : null}
                <Drawer
                    type="overlay"
                    content={< DrawerContent navigator = {
                    this.props.navigator
                }
                route = {
                    this.props.route
                } />}
                    tapToClose={true}
                    openDrawerOffset={0.2}
                    panOpenMask={0}
                    open={this.state.openedDrawer}
                    elevation={3}
                    panCloseMask={0.2}
                    styles={styles.drawer}
                    closedDrawerOffset={-3}
                    tweenHandler={(ratio) => ({
                    main: {
                        opacity: (2 - ratio) / 2
                    }
                })}>
                    <this.props.route.Page navigator={this.props.navigator} route={this.props.route} routes={this.props.routes}/>
                </Drawer>

            </Container>
        )
    }

}

export default CustomNavigationLayout
