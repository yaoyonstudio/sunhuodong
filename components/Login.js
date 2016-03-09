'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  BackAndroid,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

var TopBackBar = require('./TopBackBar');
var LoginBox = require('./LoginBox');
var Setup = require('./Setup');

class Login extends Component {

  render() {
    return (
        <View style={styles.LoginContainer}>
            <TopBackBar style={styles.TopBackBar} title="用户" />
            <LoginBox style={styles.LoginBox} />
            <View style={styles.Setup}>
                <Setup />
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    LoginContainer: {
        flex:1,
        backgroundColor: '#F5FCFF',
    },
    TopBackBar:{
        position:'absolute',
        top:0,
        left:0,
        right:0,
        height:56,
    },
    LoginBox:{
        flex:1,
    },
    Setup:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        justifyContent:'center',
        alignItems:'center',
        height:98,
    },
});


module.exports = Login;
