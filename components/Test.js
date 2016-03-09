'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Dimensions,
    BackAndroid,
    TouchableHighlight,
    TouchableOpacity,
    ScrollView
} from 'react-native';

var TopBackBar = require('./TopBackBar');
var TopBackShareBar = require('./TopBackShareBar');
var Modal = require('react-native-modalbox');
var ShareBox = require('./ShareBox');


var Ionicons = require('react-native-vector-icons/Ionicons');
var Icon = require('react-native-vector-icons/FontAwesome');

class Test extends Component {
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

    onClose() {

    }

    onOpen() {

    }

    onClosingState(state) {

    }


    render() {
        return (
            <View style={styles.container}>
                <TopBackShareBar style={{position:'absolute',top:0,left:0,right:0,height:56}} share={this.openModal.bind(this)} />

                <View sytle={{flex:1,}}>
                    <Text>1测试一下</Text>
                    <Text>测试一下</Text>
                    <Text>测试一下</Text>
                    <Text>测试一下</Text>
                    <Text>测试一下</Text>
                    <Text>测试一下</Text>
                    <Text>测试一下</Text>
                    <Text>测试一下</Text>
                    <Text>测试一下</Text>
                    <Text>测试一下</Text>
                    <Text>测试一下</Text>
                    <Text>测试一下</Text>
                    <Text>测试一下</Text>
                    <Text>测试一下</Text>
                    <Text>测试一下</Text>
                    <Text>测试一下</Text>
                    <Text>测试一下</Text>
                    <Text>测试一下</Text>
                    <Text>测试一下</Text>
                    <Text>测试一下</Text>
                    <Text>测试一下</Text>
                    <Text>测试一下</Text>
                    <Text>测试一下</Text>
                    <Text>测试一下</Text>
                    <Text>测试一下</Text>
                    <Text>测试一下</Text>
                    <Text>测试一下</Text>
                    <Text>测试一下</Text>
                    <Text>测试一下</Text>
                    <Text>测试一下</Text>
                    <Text>测试一下</Text>
                    <Text>好</Text>
                    <Text>好</Text>
                    <Text>测试一下</Text>
                    <Text>可以</Text>
                    <Text>测试一下</Text>
                </View>

                <ShareBox />
            </View>

        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});


module.exports = Test;
