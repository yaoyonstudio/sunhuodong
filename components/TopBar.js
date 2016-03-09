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


class TopBackShareBar extends Component {
    goToLogin() {
        myNavigator.push({
            id: 'Login',
            name: '登录页面',
        });
    }

    render() {
        var shareActions = [
            {title: '登录', iconName: 'person', iconColor:'#ffffff',iconSize:24 ,show:'always'}
        ];
        return (

            <Ionicons.ToolbarAndroid
                actions={shareActions}
                onActionSelected={this.goToLogin.bind(this)}
                navIconName="android-menu"
                onIconClicked={this.props.onIconClicked}
                style={styles.toolbar}
                titleColor="white"
                title={this.props.title}
                />
        );
    }
}

const styles = StyleSheet.create({
    TopBarContainer: {
        position:'absolute',
        top:0,
        left:0,
        right:0,
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

module.exports = TopBackShareBar;