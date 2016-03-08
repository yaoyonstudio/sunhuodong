'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    Image,
    View,
    TouchableHighlight,
    TouchableOpacity,
    Navigator,
    DrawerLayoutAndroid,
} from 'react-native';

var Main = require('./Main');
var Login = require('./Login');
var PostList = require('./PostList2');
var PostListTest = require('./PostListTest');
var PostDetail = require('./PostDetail');
var Test = require('./Test');

var TopicWebView = require('./TopicWebView');

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

	goToMain() {
		myNavigator.push({
		  id: 'Main',
		  name: 'Main页面',
		});
		this.closeDrawer();
	}	
	goToPostList() {
		myNavigator.push({
		  id: 'PostList',
		  name: '文章列表',
		});
		this.closeDrawer();
	}
    goToPostListTest() {
        myNavigator.push({
            id: 'PostListTest',
            name: '文章列表测试页',
        });
        this.closeDrawer();
    }
	goToTest() {
		 if(this.props.routeId == 'Test'){
		 	this.openDrawer();
		 }else{
			myNavigator.push({
			  id: 'Test',
			  name: '测试页面',
			});
			this.closeDrawer();
		 }
	}

    goTo(routeInfo) {
        myNavigator.push({
            id: routeInfo.id,
            name: routeInfo.name,
        });
        this.closeDrawer();
    }

	
    renderScene(route, navigator) {
	    var routeId = route.id;



	    if (routeId === 'Main') {
	      return (
	          <Main
				  routeId = {routeId}
	              navigator={navigator}
                  openDrawer={this.openDrawer.bind(this)}
				  {...this.props}
	              {...route.passProps} />
	      );
	    }

        if (routeId === 'Login') {
            return (
                <Login
                    routeId = {routeId}
                    navigator={navigator}
                    {...this.props}
                    {...route.passProps} />
            );
        }
	    
		if (routeId === 'Test') {
		  return (
		      <Test
		      	routeId={routeId}
		      	navigator={navigator}
				{...this.props}
				{...route.passProps} />
		  );
		}

        if (routeId === 'PostDetail') {
            return (
                <PostDetail
                    routeId={routeId}
                    navigator={navigator}
                    {...this.props}
                    {...route.passProps} />
            );
        }

        if (routeId === 'PostListTest') {
            var Request_Post = {
                API_URL:"http://www.sunhuodong.com/wp-json/wp/v2/posts",
                CATID:4,
                PAGE_SIZE:8,
            };
            return (
                <PostListTest
                    routeId={routeId}
                    navigator={navigator}
                    Request_Post={Request_Post}
                    openDrawer={this.openDrawer.bind(this)}
                    {...this.props}
                    {...route.passProps} />
            );
        }

		if (routeId === 'TopicWebView') {
			return (
				<TopicWebView
					routeId={routeId}
					navigator={navigator}
					{...this.props}
					{...route.passProps} />
			);
		}

	    //return this.noRoute(navigator);
	}

    render() {
    	var navigationView = (
            <View style={[styles.menuContainer,{flex: 1, backgroundColor: '#ffffff'}]}>
                <Text style={styles.menuTitle}>莞家生活</Text>
                <Text style={styles.menuSubTitle}>东莞城市生活资讯门户</Text>

                <View style={styles.menuMainContent}>
                    <View style={styles.menuLeft}>
                        <View style={styles.menuItem}>
                            <TouchableOpacity>
                                <Image
                                    style={styles.menuItemImg}
                                    source={require('../img/1.png')}
                                    />
                                <Text style={styles.menuItemText}>首页</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menuItem}>
                            <TouchableOpacity>
                                <Image
                                    style={styles.menuItemImg}
                                    source={require('../img/3.png')}
                                    />
                                <Text style={styles.menuItemText}>活动资讯</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menuItem}>
                            <TouchableOpacity>
                                <Image
                                    style={styles.menuItemImg}
                                    source={require('../img/5.png')}
                                    />
                                <Text style={styles.menuItemText}>附近信息</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menuItem}>
                            <TouchableOpacity>
                                <Image
                                    style={styles.menuItemImg}
                                    source={require('../img/7.png')}
                                    />
                                <Text style={styles.menuItemText}>运动健康</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.menuRight}>
                        <View style={styles.menuItem}>
                            <TouchableOpacity>
                                <Image
                                    style={styles.menuItemImg}
                                    source={require('../img/2.png')}
                                    />
                                <Text style={styles.menuItemText}>专题</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menuItem}>
                            <TouchableOpacity>
                                <Image
                                    style={styles.menuItemImg}
                                    source={require('../img/4.png')}
                                    />
                                <Text style={styles.menuItemText}>优惠促销</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menuItem}>
                            <TouchableOpacity>
                                <Image
                                    style={styles.menuItemImg}
                                    source={require('../img/6.png')}
                                    />
                                <Text style={styles.menuItemText}>便民服务</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menuItem}>
                            <TouchableOpacity>
                                <Image
                                    style={styles.menuItemImg}
                                    source={require('../img/8.png')}
                                    />
                                <Text style={styles.menuItemText}>职场人生</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View>
                    <TouchableHighlight onPress={() => this.goToTest(myNavigator)}>
                        <Text style={{fontSize:24,textAlign:'center'}}>测试页</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.goToPostList(myNavigator)}>
                        <Text style={{fontSize:24,textAlign:'center'}}>文章列表页</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => this.goToPostListTest(myNavigator)}>
                        <Text style={{fontSize:24,textAlign:'center'}}>文章列表测试页</Text>
                    </TouchableHighlight>
                </View>
            </View>

	    );
        
        return (
            <DrawerLayoutAndroid
            	ref={'DRAWER'}
                drawerWidth={300}
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
    menuContainer:{
        flex:1,

    },
    menuMainContent:{
        alignItems:'center',
        flexDirection:'row',
        paddingVertical:10,
        paddingHorizontal:24
    },
    menuLeft:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
    },
    menuRight:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
    },
    menuItem:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        margin:10,
    },
    menuItemImg:{
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        width:38,
        height:38,
    },
    menuItemText:{
        marginTop:6,
        fontSize: 14,
        color:'#4f4f4f',
        textAlign: 'center',
        alignSelf:'center'
    },
	menuTitle:{
		marginTop: 16,
		color:'#4f4f4f',
		fontSize: 20,
		textAlign: 'center'	
	},
    menuSubTitle:{
        color:'#d33e19',
        fontSize:14,
        textAlign:'center',
        marginBottom:16
    }
});

module.exports = DrawerMenu;