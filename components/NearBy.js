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


class NearBy extends Component {
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
                                <Icon name="bank" size={30} color="#ffffff" style={styles.ConvenientIcon} />
                                <Text style={styles.ConvenientText}>银行</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ConvenientItem}>
                            <TouchableOpacity>
                                <Icon name="money" size={30} color="#ffffff" style={styles.ConvenientIcon} />
                                <Text style={styles.ConvenientText}>ATM</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ConvenientItem}>
                            <TouchableOpacity>
                                <Icon name="hospital-o" size={30} color="#ffffff" style={styles.ConvenientIcon} />
                                <Text style={styles.ConvenientText}>医院</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.ConvenientBox}>
                        <View style={styles.ConvenientItem}>
                            <TouchableOpacity>
                                <Icon name="female" size={30} color="#ffffff" style={styles.ConvenientIcon} />
                                <Text style={styles.ConvenientText}>洗手间</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ConvenientItem}>
                            <TouchableOpacity>
                                <Icon name="shopping-cart" size={30} color="#ffffff" style={styles.ConvenientIcon} />
                                <Text style={styles.ConvenientText}>超市</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ConvenientItem}>
                            <TouchableOpacity>
                                <Icon name="medkit" size={30} color="#ffffff" style={styles.ConvenientIcon} />
                                <Text style={styles.ConvenientText}>药店</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.ConvenientBox}>
                        <View style={styles.ConvenientItem}>
                            <TouchableOpacity>
                                <Icon name="car" size={30} color="#ffffff" style={styles.ConvenientIcon} />
                                <Text style={styles.ConvenientText}>停车场</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ConvenientItem}>
                            <TouchableOpacity>
                                <Icon name="bus" size={30} color="#ffffff" style={styles.ConvenientIcon} />
                                <Text style={styles.ConvenientText}>公交站</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ConvenientItem}>
                            <TouchableOpacity>
                                <Icon name="plug" size={30} color="#ffffff" style={styles.ConvenientIcon} />
                                <Text style={styles.ConvenientText}>加油站</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.ConvenientBox}>
                        <View style={styles.ConvenientItem}>
                            <TouchableOpacity>
                                <Icon name="tv" size={30} color="#ffffff" style={styles.ConvenientIcon} />
                                <Text style={styles.ConvenientText}>电影院</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ConvenientItem}>
                            <TouchableOpacity>
                                <Icon name="coffee" size={30} color="#ffffff" style={styles.ConvenientIcon} />
                                <Text style={styles.ConvenientText}>咖啡厅</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ConvenientItem}>
                            <TouchableOpacity>
                                <Icon name="building-o" size={30} color="#ffffff" style={styles.ConvenientIcon} />
                                <Text style={styles.ConvenientText}>商场</Text>
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


module.exports = NearBy;
