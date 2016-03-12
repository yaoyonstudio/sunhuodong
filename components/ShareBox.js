'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';

var Modal = require('react-native-modalbox');
var Ionicons = require('react-native-vector-icons/Ionicons');
var Icon = require('react-native-vector-icons/FontAwesome');

class ShareBox extends Component {
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

    shareWeixin(shareData){
        console.log(shareData);
    }

    render() {
        return (
            //<View style={{width:this.state.width,height:this.state.height}}>
                <Modal style={{height:278, width:this.state.width,paddingVertical:12,paddingHorizontal:20}} position={"bottom"} ref={(shareModal) => global.shareModal = shareModal}>
                    <Text style={styles.modalTitle}>分享</Text>

                    <View style={styles.separator}></View>

                    <View style={styles.shareItemContainer}>
                        <TouchableOpacity onPress={() => this.shareWeixin(this.props.shareData)}>
                            <View style={styles.shareItem}>
                                <Icon name="wechat" size={22} color="#3eb135" style={styles.shareItemIcon} />
                                <Text style={styles.shareItemText}>分享给微信好友</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.shareItem}>
                                <Ionicons name="aperture" size={28} color="#f15941" style={[styles.shareItemIcon,{marginTop:3}]} />
                                <Text style={styles.shareItemText}>分享到微信朋友圈</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.shareItem}>
                                <Icon name="qq" size={22} color="#4dafea" style={styles.shareItemIcon} />
                                <Text style={styles.shareItemText}>分享给QQ好友</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.shareItem}>
                                <Icon name="star" size={24} color="#eecf3d" style={styles.shareItemIcon} />
                                <Text style={styles.shareItemText}>分享到QQ空间</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.shareItem}>
                                <Icon name="weibo" size={24} color="#df4d69" style={styles.shareItemIcon} />
                                <Text style={styles.shareItemText}>分享到新浪微博</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </Modal>
            //</View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    wrapper: {
        flex: 1
    },
    modalTitle: {
        color: '#4f4f4f',
        fontSize: 20,
        textAlign:'center',
        paddingVertical:6,
    },
    separator:{
        height:1,
        backgroundColor:'#bfbfbf'
    },
    shareItemContainer:{
        flex:1,
        justifyContent:'flex-start',
        padding:6
    },
    shareItem:{
        flexDirection:'row',
        height:32,
        margin:4,
        justifyContent:'flex-start',
        alignItems:'flex-start',
    },
    shareItemIcon:{
        textAlign:'left',
        marginTop:5
    },
    shareItemText:{
        textAlign:'left',
        marginLeft:20,
        fontSize:18,
        marginTop:3
    }
});


module.exports = ShareBox;
