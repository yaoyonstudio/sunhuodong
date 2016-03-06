'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Navigator,
  TouchableOpacity,
} from 'react-native';

var DrawerMenu = require('./components/DrawerMenu');

class sunhuodong extends Component {

  render() {
    return (

    	<DrawerMenu />

    );
  }

}

AppRegistry.registerComponent('sunhuodong', () => sunhuodong);
