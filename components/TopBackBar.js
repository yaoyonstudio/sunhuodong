'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    BackAndroid,
    ToolbarAndroid,
    Dimensions
    } from 'react-native';

var Ionicons = require('react-native-vector-icons/Ionicons');


class TopBackBar extends Component {

    goBack() {
        if( myNavigator && myNavigator.getCurrentRoutes().length > 1){
            myNavigator.pop();
        }
    };

    render() {
        return (
                <Ionicons.ToolbarAndroid
                    navIconName="chevron-left"
                    onIconClicked={this.goBack.bind(this)}
                    style={styles.toolbar}
                    titleColor="white"
                    title={this.props.title}
                    />
        );
    }
}

const styles = StyleSheet.create({
    TopBarContainer: {
        width:Dimensions.get('window').width,
        height: 56,
        backgroundColor: '#0a8acd',
    },
    toolbar: {
        width:Dimensions.get('window').width,
        height: 56,
        backgroundColor: '#0a8acd',
    },
});

module.exports = TopBackBar;