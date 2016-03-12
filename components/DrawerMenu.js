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
var TopicList = require('./TopicList');
var PostList = require('./PostList');
var PostDetail = require('./PostDetail');
var PostDetailFromUrl = require('./PostDetailFromUrl');
var Convenient = require('./Convenient');
var NearBy = require('./NearBy');
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
        var Component = null;

        switch (routeId){
            case 'Main':
                return (
                    <Main
                        routeId = {routeId}
                        navigator={navigator}
                        openDrawer={this.openDrawer.bind(this)}
                        {...this.props}
                        {...route.passProps} />
                );
                break;
            case 'Login':
                return (
                    <Login
                        routeId = {routeId}
                        navigator={navigator}
                        {...this.props}
                        {...route.passProps} />
                );
                break;
            case 'TopicList':
                var Request_Post = {
                    API_URL:"http://www.sunhuodong.com/api/topicHtml/index.php"
                };
                return (
                    <TopicList
                        routeId={routeId}
                        navigator={navigator}
                        Request_Post={Request_Post}
                        openDrawer={this.openDrawer.bind(this)}
                        {...this.props}
                        {...route.passProps} />
                );
                break;
            case 'HDZX':
                var Request_Post = {
                    API_URL:"http://www.sunhuodong.com/wp-json/wp/v2/posts",
                    CATID:[4,3,5,8],
                    PAGE_SIZE:8,
                };
                return (
                    <PostList
                        routeId={routeId}
                        navigator={navigator}
                        Request_Post={Request_Post}
                        openDrawer={this.openDrawer.bind(this)}
                        title="活动资讯"
                        {...this.props}
                        {...route.passProps} />
                );
                break;
            case 'YHCX':
                var Request_Post = {
                    API_URL:"http://www.sunhuodong.com/wp-json/wp/v2/posts",
                    CATID:2,
                    PAGE_SIZE:8,
                };
                return (
                    <PostList
                        routeId={routeId}
                        navigator={navigator}
                        Request_Post={Request_Post}
                        openDrawer={this.openDrawer.bind(this)}
                        title="优惠促销"
                        {...this.props}
                        {...route.passProps} />
                );
                break;
            case 'ZCRS':
                var Request_Post = {
                    API_URL:"http://www.sameroad.cn/wp-json/wp/v2/posts",
                    CATID:[6,7,18],
                    PAGE_SIZE:8,
                };
                return (
                    <PostList
                        routeId={routeId}
                        navigator={navigator}
                        Request_Post={Request_Post}
                        openDrawer={this.openDrawer.bind(this)}
                        title="职场人生"
                        {...this.props}
                        {...route.passProps} />
                );
                break;
            case 'YDJK':
                var Request_Post = {
                    API_URL:"http://www.sousports.cn/wp-json/wp/v2/posts",
                    CATID:[5,20],
                    PAGE_SIZE:8,
                };
                return (
                    <PostList
                        routeId={routeId}
                        navigator={navigator}
                        Request_Post={Request_Post}
                        openDrawer={this.openDrawer.bind(this)}
                        title="运动健康"
                        {...this.props}
                        {...route.passProps} />
                );
                break;
            case 'PostDetailFromUrl':
                return (
                    <PostDetailFromUrl
                        routeId={routeId}
                        navigator={navigator}
                        {...this.props}
                        {...route.passProps} />
                );
                break;
            case 'TopicWebView':
                return (
                    <TopicWebView
                        routeId={routeId}
                        navigator={navigator}
                        {...this.props}
                        {...route.passProps} />
                );
                break;
            case 'BMFW':
                return (
                    <Convenient
                        routeId={routeId}
                        navigator={navigator}
                        openDrawer={this.openDrawer.bind(this)}
                        title="便民服务"
                        {...this.props}
                        {...route.passProps} />
                );
                break;
            case 'FJXX':
                return (
                    <NearBy
                        routeId={routeId}
                        navigator={navigator}
                        openDrawer={this.openDrawer.bind(this)}
                        title="附近信息"
                        {...this.props}
                        {...route.passProps} />
                );
                break;
            case 'Test':
                return (
                    <Test
                        routeId={routeId}
                        navigator={navigator}
                        {...this.props}
                        {...route.passProps} />
                );
                break;

        }

	}

    render() {
    	var navigationView = (
            <View style={[styles.menuContainer,{flex: 1, backgroundColor: '#ffffff'}]}>
                <Text style={styles.menuTitle}>莞家生活</Text>
                <Text style={styles.menuSubTitle}>东莞城市生活资讯门户</Text>

                <View style={styles.menuMainContent}>
                    <View style={styles.menuLeft}>
                        <View style={styles.menuItem}>
                            <TouchableOpacity onPress={() => this.goTo({id:'Main',name:'首页'})}>
                                <Image
                                    style={styles.menuItemImg}
                                    source={require('../img/1.png')}
                                    />
                                <Text style={styles.menuItemText}>首页</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menuItem}>
                            <TouchableOpacity onPress={() => this.goTo({id:'HDZX',name:'活动资讯'})}>
                                <Image
                                    style={styles.menuItemImg}
                                    source={require('../img/3.png')}
                                    />
                                <Text style={styles.menuItemText}>活动资讯</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menuItem}>
                            <TouchableOpacity onPress={() => this.goTo({id:'FJXX',name:'附近信息'})}>
                                <Image
                                    style={styles.menuItemImg}
                                    source={require('../img/5.png')}
                                    />
                                <Text style={styles.menuItemText}>附近信息</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menuItem}>
                            <TouchableOpacity onPress={() => this.goTo({id:'YDJK',name:'运动健康'})}>
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
                            <TouchableOpacity onPress={() => this.goTo({id:'TopicList',name:'专题'})}>
                                <Image
                                    style={styles.menuItemImg}
                                    source={require('../img/2.png')}
                                    />
                                <Text style={styles.menuItemText}>专题</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menuItem}>
                            <TouchableOpacity onPress={() => this.goTo({id:'YHCX',name:'优惠促销'})}>
                                <Image
                                    style={styles.menuItemImg}
                                    source={require('../img/4.png')}
                                    />
                                <Text style={styles.menuItemText}>优惠促销</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menuItem}>
                            <TouchableOpacity onPress={() => this.goTo({id:'BMFW',name:'便民服务'})}>
                                <Image
                                    style={styles.menuItemImg}
                                    source={require('../img/6.png')}
                                    />
                                <Text style={styles.menuItemText}>便民服务</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menuItem}>
                            <TouchableOpacity onPress={() => this.goTo({id:'ZCRS',name:'职场人生'})}>
                                <Image
                                    style={styles.menuItemImg}
                                    source={require('../img/8.png')}
                                    />
                                <Text style={styles.menuItemText}>职场人生</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
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