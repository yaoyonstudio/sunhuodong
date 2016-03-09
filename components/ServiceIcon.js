'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
    Image
    } from 'react-native';

var Ionicons = require('react-native-vector-icons/Ionicons');

class ServiceIcon extends Component {
    goTo(routeInfo) {
        myNavigator.push({
            id: routeInfo.id,
            name: routeInfo.name,
        });
    }

    render() {
        return (
            //<Ionicons name="heart" size={40} color="red" />
            <View style={styles.ServiceIconContainer}>
                <View style={styles.ServiceItem}>
                    <TouchableOpacity onPress={() => this.goTo({id:'YHCX',name:'优惠促销'})}>
                        <Image source={require('../img/l1.png')} style={styles.ServiceImg} />
                        <Text style={styles.ServiceTxt}>优惠促销</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.ServiceItem}>
                    <TouchableOpacity onPress={() => this.goTo({id:'HDZX',name:'活动资讯'})}>
                        <Image source={require('../img/l2.png')} style={styles.ServiceImg} />
                        <Text style={styles.ServiceTxt}>活动资讯</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.ServiceItem}>
                    <TouchableOpacity onPress={() => this.goTo({id:'FJXX',name:'附近信息'})}>
                        <Image source={require('../img/l3.png')} style={styles.ServiceImg} />
                        <Text style={styles.ServiceTxt}>附近信息</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.ServiceItem}>
                    <TouchableOpacity onPress={() => this.goTo({id:'YDJK',name:'运动健康'})}>
                        <Image source={require('../img/l4.png')} style={styles.ServiceImg} />
                        <Text style={styles.ServiceTxt}>运动健康</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ServiceIconContainer:{
        flex:1,
        flexDirection:"row",
        height:118,
        paddingHorizontal:18,
        paddingVertical:24,
    },
    ServiceItem:{
        flex:1,
        flexDirection:"column",
        alignItems:"center",
    },
    ServiceImg:{
        alignSelf:"center",
        width:48,
        height:48
    },
    ServiceTxt:{
        fontSize: 14,
        textAlign: "center",
        alignItems:"center",
        margin: 8,
    }
});


module.exports = ServiceIcon;
