'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    Dimensions,
    ProgressBarAndroid,
    TouchableHighlight
} from 'react-native';

var TopBar = require('./TopBar');
var TopicWebView = require('./TopicWebView');

class TopicList extends Component {
    constructor(props){
        super(props);
        this.state = {
            requestUrl: 'http://www.sunhuodong.com/api/topicHtml/index.php',
            isLoad:false,
            dataSource:new ListView.DataSource({
                rowHasChanged:(row1,row2) => row1 !== row2,
            }),
            width: Dimensions.get('window').width-40,
        };
    }

    componentDidMount(){
        this.fetchTopic();
    };

    fetchTopic(){
        fetch(this.state.requestUrl)
            .then((response) => response.json())
            .then((responseData) => {
                //console.log(responseData);
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData),
                    isLoad:true,
                });
                //console.log(this.state.dataSource);
            })
            .catch((error) => {
                this.setState({
                    //images:responseData.length,
                    NoNetwork:true,
                });
            })
            .done();
    }

    goTopicWebView(post){
        myNavigator.push({
            id:'TopicWebView',
            name:post.title,
            component:TopicWebView,
            passProps:{
                htmlUrl:post.htmlUrl,
                title:post.title
            }
        });
    };

    renderPost(post){
        return (
            <TouchableHighlight style={{margin:10}} onPress={() => this.goTopicWebView(post)}  underlayColor='#dddddd'>
                <View style={styles.TopicItem}>
                    <Text numberOfLines={2} style={styles.TopicTitle}>{post.title}</Text>
                    <Image source={{uri:post.imgUrl}} style={[styles.TopicImg,{width:this.state.width,height:200}]} />
                    <Text numberOfLines={3} style={styles.TopicExcerpt}>{post.excerpt}</Text>
                    <Text numberOfLines={1} style={styles.TopicDetail}>查看专题详情</Text>
                </View>
            </TouchableHighlight>
        );
    };

    renderLoadingView(){
        return (
            <View style={styles.TopicContainer}>
                <View style={styles.TopicContent}>
                    <ProgressBarAndroid styleAttr='Inverse'/>
                    <Text style={{textAlign:'center'}}>载入中...</Text>
                </View>
            </View>
        );
    }

    renderNoNetwork(){
        return (
            <View style={styles.TopicContainer}>
                <View style={styles.TopicContent}>
                    <Text style={{textAlign:'center'}}>您的设备未联网，请连接网络后重试。</Text>
                </View>
            </View>
        );
    }

    render() {
        if(this.state.NoNetwork){
            return this.renderNoNetwork();
        }

        if(!this.state.isLoad){
            return this.renderLoadingView();
        }

        return (
            <View style={styles.TopicContainer}>
                <TopBar onIconClicked={this.props.openDrawer} title={this.props.title} />

                <View style={styles.TopicContent}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderPost.bind(this)}
                        />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    TopicContainer: {
        flex: 1,
        backgroundColor:"#f1f1f1"
    },
    TopicMenu:{
        justifyContent:"center",
        height:44,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:"#dddddd",
        backgroundColor:"#f1f1f1",
        paddingLeft:10
    },
    TopicMenuTitle:{
        fontSize: 16,
        fontWeight:"700",
        paddingLeft:10,
    },
    TopicContent:{
        flex:1,
        justifyContent:"center",
    },
    TopicItem:{
        paddingTop:8,
        paddingBottom:8,
        paddingLeft:10,
        paddingRight:10,
        alignItems:"flex-start",
        borderWidth:1,
        borderColor:"#eeeeee",
        borderRadius:4,
        backgroundColor:"#ffffff",

    },
    TopicImg:{
        alignItems:"center",
        justifyContent:"center",
        alignSelf:"center",
    },
    TopicThumbImg:{
        alignSelf:"center",
        width:88,
        height:88,
    },
    TopicTxt:{
        flex:1,
        paddingLeft:8,
    },
    TopicTitle: {
        fontSize: 20,
        fontWeight:"700",
        color:"#333333",
        textAlign: 'left',
        marginVertical:10,
    },
    TopicExcerpt: {
        marginTop:4,
        fontSize:14,
        textAlign: 'left',
        color: '#666666',
        marginVertical:12,
    },
    TopicDetail:{
        fontSize:16,
        fontWeight:"700",
        color:"#333333",
        marginBottom:10
    }
});

module.exports = TopicList;