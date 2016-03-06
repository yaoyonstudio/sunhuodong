'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    ToolbarAndroid,
    } from 'react-native';

class TopBar extends Component {
    render() {
        return (
            <ToolbarAndroid
                actions={toolbarActions}
                navIcon={require('../img/menu2.png')}
                onIconClicked = { this.props.openDrawer }
                style={styles.toolbar}
                title="阳光活动网"></ToolbarAndroid>
        );
    }
}
var toolbarActions = [
    {title: '用户登录', icon: require('../img/user.png'), show: 'always'},
];
const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#e9eaed',
        height: 56,
    },
});

module.exports = TopBar;