import React, {Component} from 'react';
import {Text, View, WebView} from 'react-native';

class ViewFragment extends Component {
    constructor(props) {
        super(props)
        this.state = {
          fragmenetId: this.props.route.fragmentId
        }
    }

    render() {
        return (   <WebView
        source={{html: "<html><body><p>alalalal</p></body></html>"}}/>
                    )


    }
}

export default ViewFragment
