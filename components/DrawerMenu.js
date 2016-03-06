'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Navigator,
    DrawerLayoutAndroid,
} from 'react-native';

var Main = require('./Main');
var Test = require('./Test');

class DrawerMenu extends Component {
	constructor(props) {
    	super(props);
    }

	openDrawer(){
		this.refs['DRAWER'].openDrawer();
	};
	closeDrawer(){
		this.refs['DRAWER'].closeDrawer();
	}

	gotoMain() {
		myNavigator.push({
		  id: 'Main',
		  name: 'Main页面',
		});
		this.closeDrawer();
	}	
	gotoPostList() {
		myNavigator.push({
		  id: 'PostList',
		  name: '文章列表',
		});
		this.closeDrawer();
	}
	gotoTest() {
		myNavigator.push({
		  id: 'Test',
		  name: '测试页面',
		});
		this.closeDrawer();
	}
	
    renderScene(route, navigator) {
	    var routeId = route.id;
	    if (routeId === 'Main') {
	      return (
	          <Main
	              navigator={navigator} />
	      );
	    }
	    
		if (routeId === 'Test') {
		  return (
		      <Test
		          navigator={navigator} {...route.passProps} />
		  );
		}

	    //return this.noRoute(navigator);

	}


    render() {
    	var navigationView = (
	        <View style={{flex: 1, backgroundColor: 'blue'}}>
	            <Text style={styles.menuTitle}>导航栏标题</Text>

	            <TouchableHighlight onPress={this.gotoMain.bind(this)}>
	            	<Text style={styles.menuItem}>首页</Text>
	            </TouchableHighlight>
	            
	            <TouchableHighlight>
	            	<Text style={styles.menuItem}>列表页</Text>
	            </TouchableHighlight>

	            <TouchableHighlight onPress={this.gotoTest.bind(this)}>
	            	<Text style={styles.menuItem}>测试页</Text>
	            </TouchableHighlight>
	            	            
	        </View>
	    );
        
        return (
            <DrawerLayoutAndroid
            	ref={'DRAWER'}
                drawerWidth={240}
                drawerPosition={DrawerLayoutAndroid.positions.left}
                renderNavigationView={() => navigationView}>

                <View style={{flex:1}}>
                	<Navigator
                		ref={(myNavigator) => global.myNavigator = myNavigator}
			            initialRoute={{id: 'Main', name: 'MainPage'}}
			            renderScene={this.renderScene.bind(this)}
			            navigator={this.props.navigator}
			            configureScene={(route) => {
			            if (route.sceneConfig) {
			              return route.sceneConfig;
			            }
			            return Navigator.SceneConfigs.FloatFromRight;
			          }} />
                </View>

            </DrawerLayoutAndroid>
        );
    }
}


const styles = StyleSheet.create({

	menuTitle:{
		margin: 10,
		color:'#fff',
		fontSize: 15, 
		textAlign: 'center'	
	},
	menuItem:{
		marginTop: 10,
		marginLeft:20,
		color:'#fff',
		fontSize: 15, 
		textAlign: 'left'
	},
	
});

module.exports = DrawerMenu;