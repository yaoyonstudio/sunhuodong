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


class TopicWebView extends Component {
    constructor(props){
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height-70,
        };
    }

    render(){
        var htmlUrl = this.props.htmlUrl;

        return (
            <View style={{flex:1}}>

            <WebView
                style={{height:this.state.height}}
                source={{uri:htmlUrl}}
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
    TopicWebViewContainer:{
        flex:1,
    }
});

module.exports = TopicWebView;