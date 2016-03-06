'use strict';

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableHighlight,
    TouchableOpacity,
    Navigator,
    } from 'react-native';

//var styles = require('./styles');
var PostDetail = require('./PostDetail');

var API_URL = "http://www.sunhuodong.com/wp-json/wp/v2/posts";
var PAGE_SIZE = 8;

class PostList extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataSource:new ListView.DataSource({
                rowHasChanged:(row1,row2) => row1 !== row2,
            }),
            loaded:false,
            page:1
        };
    }

    componentDidMount(){
        this.fetchData();
    };

    fetchData(){
        var PARAMS = '?filter[posts_per_page]='+PAGE_SIZE + '&page='+ this.state.page;
        var REQUEST_URL = API_URL + PARAMS;

        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData),
                    loaded:true,
                    page:this.state.page + 1
                });
            })
            .done();
    };

    showPostDetail(post){
        this.props.navigator.push({
            id:'PostDetail',
            title:post.title.rendered,
            component:PostDetail,
            passProps:{
                postTitle:post.title.rendered,
                post:post
            }
        });
    };

    renderScene(route, navigator) {
        return (
            <View style={styles.all}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderPost.bind(this)}
                    style={styles.listView}
                    />
                <View>
                    <TouchableHighlight style={styles.btn} underlayColor='#9400d3' onPress={this.fetchData.bind(this)}>
                        <Text styl={styles.btntxt}>更多文章</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }

    renderPost(post){
        //var postDate = post.date.substring(0,10);
        var imgurl;
        if(!post.thumbnailurl){
            imgurl = "http://www.sunhuodong.com/uploads/noimage.png";
        }else{
            imgurl = post.thumbnailurl
        }
        return (
            <TouchableHighlight onPress={() => this.showPostDetail(post)} underlayColor='#dddddd'>
                <View style={styles.container}>
                    <Image source={{uri:imgurl}} style={styles.thumbnail} />
                    <View style={styles.rightContainer}>
                        <Text style={styles.title}>{post.title.rendered}</Text>
                        <Text style={styles.year}>{post.date.substring(0,10)}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    };

    renderLoadingView(){
        return (
            <View style={styles.container}>
                <Text>Loading... please wait!</Text>
            </View>
        );
    }

    render() {
        var NavigationBarRouteMapper = {
            LeftButton(route, navigator, index, navState) {
                return (
                    <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
                                      onPress={() => navigator.parentNavigator.pop()}>
                        <Text style={{color: 'white', margin: 10,}}>
                            返回
                        </Text>
                    </TouchableOpacity>
                );
            },
            RightButton(route, navigator, index, navState) {
                return (
                    <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
                        <Text style={{color: 'white', margin: 10,}}>
                            登陆
                        </Text>
                    </TouchableOpacity>
                );
            },
            Title(route, navigator, index, navState) {
                return (
                    <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#333333'}}>
                        <Text style={{color: 'white', margin: 10, fontSize: 16}}>
                            莞家生活
                        </Text>
                    </View>
                );
            }
        };

        if(!this.state.loaded){
            return this.renderLoadingView();
        }
        return (
            <Navigator
                renderScene={this.renderScene.bind(this)}
                navigator={this.props.navigator}
                navigationBar={
                <Navigator.NavigationBar style={{backgroundColor: '#246dd5'}}
                routeMapper={NavigationBarRouteMapper} />
                }
                />
        )
    };
}

module.exports = PostList;