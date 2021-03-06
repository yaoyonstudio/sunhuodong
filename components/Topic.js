'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    ProgressBarAndroid,
    TouchableHighlight
} from 'react-native';

var TopicWebView = require('./TopicWebView');

class Topic extends Component {
    constructor(props){
        super(props);
        this.state = {
            requestUrl: 'http://www.sunhuodong.com/api/topicHtml/index.php',
            isLoad:false,
            dataSource:new ListView.DataSource({
                rowHasChanged:(row1,row2) => row1 !== row2,
            }),
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
                post:post
            }
        });
    };

    renderPost(post){
        return (
            <TouchableHighlight onPress={() => this.goTopicWebView(post)}  underlayColor='#dddddd'>
                <View style={styles.TopicItem}>
                    <View style={styles.TopicThumb}>
                        <Image source={{uri:post.thumbUrl}} style={styles.TopicThumbImg} />
                    </View>
                    <View style={styles.TopicTxt}>
                        <Text numberOfLines={2} style={styles.TopicTitle}>{post.title}</Text>
                        <Text numberOfLines={3} style={styles.TopicExcerpt}>{post.excerpt}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    };

    renderLoadingView(){
        return (
            <View style={styles.TopicContainer}>
                <View style={styles.TopicMenu}>
                    <Text style={styles.TopicMenuTitle}>专题</Text>
                </View>
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
                <View style={styles.TopicMenu}>
                    <Text style={styles.TopicMenuTitle}>专题</Text>
                </View>

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
        height:256,
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
        flexDirection:"row",
        alignItems:"flex-start",
        borderBottomWidth:1,
        borderColor:"#dddddd",
        paddingLeft:10,
        paddingRight:10,
    },
    TopicThumb:{
        width:88,
        alignItems:"flex-start",
        justifyContent:"center",

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
        fontSize: 16,
        fontWeight:"700",
        color:"#555555",
        textAlign: 'left',
        lineHeight:20,
        overflow:"hidden"
    },
    TopicExcerpt: {
        marginTop:4,
        fontSize:12,
        textAlign: 'left',
        color: '#666666',
    },
});

module.exports = Topic;