'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    BackAndroid,
    TouchableHighlight,
    TouchableOpacity
    } from 'react-native';

var Icon = require('react-native-vector-icons/FontAwesome');


class Setup extends Component {

    render() {
        return (
            <View style={styles.SetupContainer}>

                <View style={styles.SetupItem}>
                    <TouchableOpacity>
                        <Icon name="user" size={30} color="#6f6f6f" style={styles.SetupItemIcon}  />
                        <Text style={styles.SetupItemText}>关于我们</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.SetupItem}>
                    <TouchableOpacity>
                        <Icon name="comments" size={30} color="#6f6f6f" style={styles.SetupItemIcon}  />
                        <Text style={styles.SetupItemText}>意见反馈</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.SetupItem}>
                    <TouchableOpacity>
                        <Icon name="refresh" size={30} color="#6f6f6f" style={styles.SetupItemIcon}  />
                        <Text style={styles.SetupItemText}>检查更新</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.SetupItem}>
                    <TouchableOpacity>
                        <Icon name="trash" size={30} color="#6f6f6f" style={styles.SetupItemIcon}  />
                        <Text style={styles.SetupItemText}>清除缓存</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    SetupContainer: {
        height:98,
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
    },
    SetupItem:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        alignSelf:'center',
        margin:10,
    },
    SetupItemIcon:{
        alignSelf:'center',
        textAlign:'center',
    },
    SetupItemText:{
        textAlign:'center',
        fontSize:14,
        color:'#4f4f4f'
    }

});


module.exports = Setup;
