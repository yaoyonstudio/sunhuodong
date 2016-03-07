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

    renderPost(post){

        if(!post.thumbnailurl){
            return (
                <TouchableHighlight onPress={() => this.showPostDetail(post)} underlayColor='#cccccc'>
                    <View style={styles.container}>
                        <View style={styles.rightContainer}>
                            <Text style={styles.title} numberOfLines={2}>{post.title.rendered}</Text>
                            <Text style={styles.year}>{post.date.substring(0,10)}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            )
        }else{
            return (
                <TouchableHighlight onPress={() => this.showPostDetail(post)} underlayColor='#cccccc'>
                    <View style={styles.container}>
                        <Image source={{uri:post.thumbnailurl}} style={styles.thumbnail} />
                        <View style={styles.rightContainer}>
                            <Text style={styles.title}  numberOfLines={2}>{post.title.rendered}</Text>
                            <Text style={styles.year}>{post.date.substring(0,10)}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            );
        }
    };

    renderLoadingView(){
        return (
            <View style={styles.container}>
                <Text>Loading... please wait!</Text>
            </View>
        );
    }

    render() {

        if(!this.state.loaded){
            return this.renderLoadingView();
        }
        return (
            <View style={styles.all}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderPost.bind(this)}
                    style={styles.listView}
                    />
                <View>
                    <TouchableHighlight style={styles.btn} underlayColor='#9400d3' onPress={this.fetchData.bind(this)}>
                        <Text styl={styles.btntxt} >更多文章</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    };
}


const styles = StyleSheet.create({
    all:{
        flex:1,
        marginTop:56,
    },

    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding:6,
    },
    rightContainer: {
        flex: 1,
        justifyContent:'flex-start'
    },
    title: {
        fontSize: 16,
        marginBottom: 8,
        textAlign: 'left',
        color:'#4f4f4f'
    },
    year: {
        textAlign: 'left',
    },
    thumbnail: {
        width: 80,
        height: 80,
        marginRight:12,
    },
    listView: {

    },
    btn: {
        margin:6,
        backgroundColor:'#00bfff',
        borderRadius:6,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:10,
        paddingBottom:10,
    },
    btntxt: {
        textAlign:'center',
    },
    featuredImg: {
        width:300,
        height:200,
    },
    postDetailContainer:{
        flex:1,
        marginTop:56,
        backgroundColor:'yellow',
    }
});

module.exports = PostList;