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
    Dimensions,
    WebView,
    } from 'react-native';

var TopBackShareBar = require('./TopBackShareBar');
var ShareBox = require('./ShareBox');

class PostDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
        };
    }

    openModal() {
        shareModal.open();
    }

    render(){
        var w=this.state.width - 20;
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
                  .ContentContainer img {clear:both; display:block; margin:0 auto;text-align:center; width:${w}pt !important; max-width:100% !important; height:auto !important;}
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

        if(imgurl){
            contentHTML += '<image src="';
            contentHTML += imgurl;
            contentHTML += '" style="display:block;margin:0 auto;text-align:center;width:100%;height:auto;" />' ;
        }


        contentHTML += '<div class="ContentContainer">' ;
        contentHTML += content.rendered ;
        contentHTML += '</div>' ;

        contentHTML += '</div></body></html>';

        return (
            <View style={{flex:1}}>
                <TopBackShareBar title={this.props.title} share={this.openModal.bind(this)} />

                <WebView
                    style={styles.postDetailContainer}
                    source={{html:contentHTML}}
                    startInLoadingState={true}
                    domStorageEnabled={false}
                    javaScriptEnabled={true}
                    >
                </WebView>

            </View>
        );

    }
}

const styles = StyleSheet.create({
    postDetailContainer:{
        flex:1,
    }
});

module.exports = PostDetail;