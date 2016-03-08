'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    BackAndroid,
    Dimensions,
    TouchableOpacity,
    } from 'react-native';

var TopBar = require('./TopBar');

var Icon = require('react-native-vector-icons/FontAwesome');


class Convenient extends Component {
    constructor(props){
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TopBar onIconClicked={this.props.openDrawer} title={this.props.title} style={styles.TopBar} />

                <View style={[styles.ConvenientIconContainer,{height:this.state.height-140}]}>
                    <View style={styles.ConvenientBox}>
                        <View style={styles.ConvenientItem}>
                            <TouchableOpacity>
                                <Icon name="map-marker" size={30} color="#ffffff" style={styles.ConvenientIcon} />
                                <Text style={styles.ConvenientText}>东莞地图</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ConvenientItem}>
                            <TouchableOpacity>
                                <Icon name="cloud" size={30} color="#ffffff" style={styles.ConvenientIcon} />
                                <Text style={styles.ConvenientText}>东莞天气</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ConvenientItem}>
                            <TouchableOpacity>
                                <Icon name="phone" size={30} color="#ffffff" style={styles.ConvenientIcon} />
                                <Text style={styles.ConvenientText}>便民电话</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.ConvenientBox}>
                        <View style={styles.ConvenientItem}>
                            <TouchableOpacity>
                                <Icon name="bus" size={30} color="#ffffff" style={styles.ConvenientIcon} />
                                <Text style={styles.ConvenientText}>东莞公交</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ConvenientItem}>
                            <TouchableOpacity>
                                <Icon name="calendar" size={30} color="#ffffff" style={styles.ConvenientIcon} />
                                <Text style={styles.ConvenientText}>万年历</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ConvenientItem}>
                            <TouchableOpacity>
                                <Icon name="truck" size={30} color="#ffffff" style={styles.ConvenientIcon} />
                                <Text style={styles.ConvenientText}>快递查询</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.ConvenientBox}>
                        <View style={styles.ConvenientItem}>
                            <TouchableOpacity>
                                <Icon name="university" size={30} color="#ffffff" style={styles.ConvenientIcon} />
                                <Text style={styles.ConvenientText}>东莞社保</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ConvenientItem}>
                            <TouchableOpacity>
                                <Icon name="cloud" size={30} color="#ffffff" style={styles.ConvenientIcon} />
                                <Text style={styles.ConvenientText}>公积金</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ConvenientItem}>
                            <TouchableOpacity>
                                <Icon name="home" size={30} color="#ffffff" style={styles.ConvenientIcon} />
                                <Text style={styles.ConvenientText}>违章查询</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.ConvenientBox}>
                        <View style={styles.ConvenientItem}>
                            <TouchableOpacity>
                                <Icon name="mobile-phone" size={30} color="#ffffff" style={styles.ConvenientIcon} />
                                <Text style={styles.ConvenientText}>手机查询</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ConvenientItem}>
                            <TouchableOpacity>
                                <Icon name="credit-card" size={30} color="#ffffff" style={styles.ConvenientIcon} />
                                <Text style={styles.ConvenientText}>身份证</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ConvenientItem}>
                            <TouchableOpacity>
                                <Icon name="book" size={30} color="#ffffff" style={styles.ConvenientIcon} />
                                <Text style={styles.ConvenientText}>英汉翻译</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    TopBar:{
        position:'absolute',
        top:0,
        left:0,
        right:0,
        height:56
    },
    ConvenientContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        paddingVertical:30
    },
    ConvenientBox:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
    },
    ConvenientItem:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        width:78,
        height:78,
        borderRadius:78,
        backgroundColor:'#d33e19',
        marginHorizontal:8
    },
    ConvenientIcon:{
        textAlign:"center",
        alignSelf:"center",
    },
    ConvenientText:{
        color:'#ffffff',
        paddingTop:0,
        textAlign:'center',
        alignSelf:"center",
    }
});


module.exports = Convenient;
