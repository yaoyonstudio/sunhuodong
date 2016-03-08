'use strict';

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
    Navigator,
    WebView,
    } from 'react-native';

//var styles = require('./styles');

class PostDetail extends Component {
    renderScene(route, navigator) {
        var post = this.props.post;
        var imgurl = ( typeof post.featuredimgurl !== 'undefined' ) ? post.featuredimgurl : '';
        var title = (typeof post.title !== 'undefined' ) ? post.title : '';
        var content = (typeof post.content !== 'undefined' ) ? post.content : '';

        var contentHTML = `
            <!DOCTYPE html>\n
            <html>
              <head>
                <meta http-equiv="content-type" content="text/html; charset=utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0" user-scalable=no">
                <style type="text/css">
                  body { margin: 0; padding: 0; background: #eee;width:100%;}
                  .ViewContainer{width:100%;padding:10pt;box-sizing:border-box;-webkit-box-sizing:border-box;}
                  .ContentContainer{width:100%;overflow:hidden;}
                  .ContentContainer img { display:block !important; max-width:100% !important; height:auto !important;}
                  .ContentContainer h2 { font-size:18pt; padding: 10pt; margin: 0; text-align: center; color: #33f; }
                  .ContentContainer p{ font-size:12pt; }
                </style>
              </head>
              <body>
              <div class="ViewContainer">
        `;

        contentHTML += '<h2>' ;
        contentHTML += title.rendered ;
        contentHTML += '</h2>' ;

        contentHTML += '<div class="ContentContainer">' ;
        contentHTML += content.rendered ;
        contentHTML += '</div>' ;

        contentHTML += '</div></body></html>';

        return (
                <WebView
                    style={styles.postDetailContainer}
                    source={{html:contentHTML}}
                    startInLoadingState={true}
                    domStorageEnabled={false}
                    javaScriptEnabled={true}
                    >
                </WebView>
        );
    };

    render(){
        var navtitle = this.props.postTitle;
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
                            分享
                        </Text>
                    </TouchableOpacity>
                );
            },
            Title(route, navigator, index, navState) {
                return null;
                //return (
                //    //<View style={{flex: 1, justifyContent: 'center', backgroundColor: '#333333'}}>
                //    //    <Text style={{color: 'white', margin: 10, fontSize: 16}}>
                //    //        {navtitle}
                //    //    </Text>
                //    //</View>
                //);
            }
        };

        return (
          <Navigator
            renderScene={this.renderScene.bind(this)}
            navigator={this.props.navigator}
            navigationBar={
                <Navigator.NavigationBar style={{backgroundColor: '#246dd5'}}
                routeMapper={NavigationBarRouteMapper} />
                }
           />
        );
    }
}

const styles = StyleSheet.create({
    postDetailContainer:{
        flex:1,
        marginTop:56,
        backgroundColor:'yellow',
    }
});

module.exports = PostDetail;