'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

var Slider = require('./Slider');
var ServiceIcon = require('./ServiceIcon');
var Topic = require('./Topic');

class Main extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
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
