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
      <ScrollView>
        <TopBar onIconClicked={this.props.openDrawer} title="莞家生活" />
        <Slider />
        <ServiceIcon />
        <Topic />
        <Ad />
        <ConvenientIcon />
      </ScrollView>
    );
  }
}

module.exports = Main;
