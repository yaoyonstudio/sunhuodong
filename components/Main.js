'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
  BackAndroid,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

var TopBar = require('./TopBar');
var Slider = require('./Slider');
var ServiceIcon = require('./ServiceIcon');
var Topic = require('./Topic');
var Ad = require('./Ad');
var ConvenientIcon = require('./ConvenientIcon');

BackAndroid.addEventListener('hardwareBackPress', () => {
    if (myNavigator && myNavigator.getCurrentRoutes().length > 1) {
        myNavigator.pop();
        return true;
    }
    return false;
});

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <View style={{flex:1}}>
            <TopBar style={styles.MainTop} onIconClicked={this.props.openDrawer} title="莞家生活" />
            <ScrollView>
                <Slider />
                <ServiceIcon />
                <Topic />
                <Ad />
                <ConvenientIcon />
            </ScrollView>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    MainTop:{
        position:'absolute',
        top:0,
        left:0,
        right:0,
        height:56,
    },

})

module.exports = Main;
