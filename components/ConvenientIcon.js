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

var Icon = require('react-native-vector-icons/FontAwesome');

class ConvenientIcon extends Component {
    goToTest() {
        myNavigator.push({
            id: 'Test',
            name: '测试页面',
        });
    }

    render() {
        return (
            <View>
                <View style={styles.ConvenientMenu}>
                    <Text style={styles.ConvenientMenuTitle}>便民服务</Text>
                </View>

                <View style={styles.ConvenientIconContainer}>
                    <View style={styles.ConvenientItem}>
                        <TouchableOpacity onPress={this.goToTest.bind(this)}>
                            <Icon name="map-marker" size={30} color="#d33e19" style={styles.ConvenientIcon} />
                            <Text style={styles.ConvenientIcon}>东莞地图</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ConvenientItem}>
                        <TouchableOpacity>
                            <Icon name="cloud" size={30} color="#d33e19" style={styles.ConvenientIcon} />
                            <Text style={styles.ConvenientIcon}>东莞天气</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ConvenientItem}>
                        <TouchableOpacity>
                            <Icon name="phone" size={30} color="#d33e19" style={styles.ConvenientIcon} />
                            <Text style={styles.ConvenientIcon}>便民电话</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ConvenientItem}>
                        <TouchableOpacity>
                            <Icon name="bus" size={30} color="#d33e19" style={styles.ConvenientIcon} />
                            <Text style={styles.ConvenientIcon}>公交查询</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.ConvenientIconContainer}>
                    <View style={styles.ConvenientItem}>
                        <TouchableOpacity>
                            <Icon name="calendar" size={30} color="#d33e19" style={styles.ConvenientIcon} />
                            <Text style={styles.ConvenientIcon}>万年历</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ConvenientItem}>
                        <TouchableOpacity>
                            <Icon name="car" size={30} color="#d33e19" style={styles.ConvenientIcon} />
                            <Text style={styles.ConvenientIcon}>违章查询</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ConvenientItem}>
                        <TouchableOpacity>
                            <Icon name="truck" size={30} color="#d33e19" style={styles.ConvenientIcon} />
                            <Text style={styles.ConvenientIcon}>快递查询</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ConvenientItem}>
                        <TouchableOpacity>
                            <Icon name="university" size={30} color="#d33e19" style={styles.ConvenientIcon} />
                            <Text style={styles.ConvenientIcon}>社保查询</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ConvenientIconContainer:{
        flex:1,
        flexDirection:"row",
        height:78,
        paddingHorizontal:18,
    },
    ConvenientMenu:{
        justifyContent:"center",
        height:44,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:"#dddddd",
        backgroundColor:"#f1f1f1",
        paddingLeft:10
    },
    ConvenientMenuTitle:{
        fontSize: 14,
        fontWeight:"700",
        paddingLeft:10,
    },
    ConvenientItem:{
        flex:1,
        flexDirection:"column",
        alignItems:"center",
        alignSelf:"center",
    },
    ConvenientIcon:{
        textAlign:"center",
        alignSelf:"center",
    }
});


module.exports = ConvenientIcon;
