'use strict';

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
    WebView,
    Dimensions
    } from 'react-native';

var TopBackShareBar = require('./TopBackShareBar');
var ShareBox = require('./ShareBox');

class TopicWebView extends Component {
    constructor(props){
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height-70,
        };
    }

    openModal() {
        shareModal.open();
    }

    render(){
        return (
            <View style={{flex:1}}>
                <TopBackShareBar title={this.props.title} share={this.openModal.bind(this)} />
                <WebView
                    style={{height:this.state.height}}
                    source={{uri:this.props.htmlUrl}}
                    startInLoadingState={true}
                    domStorageEnabled={false}
                    javaScriptEnabled={true}
                    >
                </WebView>
                <ShareBox />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    TopBarContainer: {
        width:Dimensions.get('window').width,
        height: 56,
        backgroundColor: '#0a8acd',
    },
    toolbar: {
        width:Dimensions.get('window').width,
        height: 56,
        backgroundColor: '#0a8acd',
    },
    TopicWebViewContainer:{
        flex:1,
    }
});

module.exports = TopicWebView;