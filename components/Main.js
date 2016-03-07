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
      <ScrollView style={styles.container}>
        <TopBar onIconClicked={this.props.openDrawer} title="莞家生活" />

        <Slider />

        <ServiceIcon />

        <Topic />




        <Text>{this.props.routeId}</Text>
        <Text>{this.props.routeId}</Text>
        <Text>{this.props.routeId}</Text>
        <Text style={styles.welcome}>Here is the Main Page.</Text>
        <Text>{this.props.routeId}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


module.exports = Main;
