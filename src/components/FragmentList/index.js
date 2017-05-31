import React, {Component} from 'react'
import {
    Text,
    View,
    TouchableHighlight,
    Button,
    StyleSheet,
    Image,
    ListView,
    TouchableWithoutFeedback
} from 'react-native';
import dummyFragments from './dummyFragments.js'
import {Divider, Icon} from 'react-native-material-ui'
import styles from './styles.js'
import routes from "../../routes.js"

var ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
})

class FragmentList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: ds.cloneWithRows(dummyFragments)
        }
    }
    onPressItem(fragmentId) {
       this.props.navigator.replace({
            ...routes.viewFragment,
            key: Math.random(),
            fragmentId: fragmentId
        });
    }
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => (
                <TouchableWithoutFeedback onPress={this.onPressItem.bind(this,rowData.id)}>
                    <View style={styles.container}>
                        <View style={styles.leftView}>
                            <Icon name={rowData.icon} style={styles.textStyle}/>
                        </View>
                        <View style={styles.rightView}>
                            <Text style={styles.titleStyle}>
                                {rowData.title + '(' + rowData.type + ')'}
                            </Text>
                            <Text style={styles.textStyle} ellipsizeMode='tail' numberOfLines={1}>{rowData.description}</Text>
                        </View>
                        <Divider/>
                    </View>
                </TouchableWithoutFeedback>
            )}/>
        );
    }
}

export default FragmentList
