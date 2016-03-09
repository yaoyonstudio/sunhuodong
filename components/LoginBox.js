'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    Image,
    View,
    TextInput,
    BackAndroid,
    TouchableHighlight,
    TouchableOpacity
    } from 'react-native';



class LoginBox extends Component {

    render() {
        return (
            <View style={styles.LoginBoxContainer}>
                <Image source={require('../img/user.png')} style={styles.UserImage} />
                <View style={styles.LoginInput}>
                    <TextInput
                        style={styles.style_user_input}
                        placeholder='用户名/手机号/邮箱'
                        numberOfLines={1}
                        autoFocus={false}
                        underlineColorAndroid={'transparent'}
                        textAlign='center'
                        />
                    <View style={{height:1,backgroundColor:'#f4f4f4'}} />
                    <TextInput
                        style={styles.style_pwd_input}
                        placeholder='密码'
                        numberOfLines={1}
                        underlineColorAndroid={'transparent'}
                        secureTextEntry={true}
                        textAlign='center'
                        />
                    <View style={styles.style_view_commit}>
                        <Text style={{color:'#fff'}}>
                            登录
                        </Text>
                    </View>
                </View>
                <View style={styles.OtherLogin}>
                    <View style={styles.OtherLoginItem}>
                        <TouchableOpacity>
                            <Image source={require('../img/qqlogin.png')} style={styles.OtherLoginIcon} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.OtherLoginItem}>
                        <TouchableOpacity>
                            <Image source={require('../img/weixinlogin.png')} style={styles.OtherLoginIcon} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.OtherLoginItem}>
                        <TouchableOpacity>
                            <Image source={require('../img/weibologin.png')} style={styles.OtherLoginIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.UserReg}>
                    <Text style={styles.UserRegTxt}>注册帐户</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    LoginBoxContainer: {
        flex: 1,
        alignItems: 'center',
        paddingVertical:12
    },
    UserImage:{
        alignItems:'center',
        width:88,
        height:88
    },
    LoginInput:{
        alignItems: 'center',
    },
    OtherLogin:{
        flexDirection:'row',
        paddingHorizontal:20,
        paddingVertical:6,
        alignItems:'center',
        justifyContent:'center',
    },
    OtherLoginItem:{
        flex:1,
        marginHorizontal:20,
        marginVertical:16,
        alignItems:'center',
        alignSelf:'center'
    },
    OtherLoginIcon:{
        width:48,
        height:48,
    },
    UserReg:{

    },
    UserRegTxt:{
        textAlign:'center',
        color:'#3f3f4f',
        fontSize:16
    },
    style_user_input:{
        backgroundColor:'#fff',
        marginTop:10,
        height:35,
    },
    style_pwd_input:{
        backgroundColor:'#fff',
        height:35,
    },
    style_view_commit:{
        width:320,
        marginTop:12,
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#0a8acd',
        height:35,
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


module.exports = LoginBox;
