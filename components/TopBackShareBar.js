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
var Modal = require('react-native-modalbox');
var ShareBox = require('./ShareBox');

class TopBackShareBar extends Component {

    goBack() {
        if( myNavigator && myNavigator.getCurrentRoutes().length > 1){
            myNavigator.pop();
        }
    };

    openModal() {
        shareModal.open();
    }

    render() {
        var shareActions = [
            {title: '分享', iconName: 'share', iconColor:'#ffffff',iconSize:24,show:'always'},
        ];
        return (
            <View>
                <Ionicons.ToolbarAndroid
                    actions={shareActions}
                    navIconName="chevron-left"
                    onIconClicked={this.goBack.bind(this)}
                    onActionSelected={this.props.share}
                    style={styles.toolbar}
                    titleColor="white"
                    title={this.props.title}
                    />
            </View>

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
    }
});

module.exports = TopBackShareBar;