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


class Test extends Component {

    //componentDidMount(){
    //    console.log(myNavigator);
    //    console.log(this.props);
    //    console.log('----');
    //    console.log(myNavigator.getCurrentRoutes());
    //    console.log(myNavigator.getCurrentRoutes().length);
    //    console.log(this.props.navigator.getCurrentRoutes());
    //    console.log(this.props.navigator.getCurrentRoutes().length);
    //};


  render() {
    return (
      <View style={styles.container}>
        <TopBackBar />
        <Text style={styles.welcome}>Here is a test.</Text>
        <Text>{this.props.routeId}</Text>
        <Text>{this.props.rr}</Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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


module.exports = Test;
