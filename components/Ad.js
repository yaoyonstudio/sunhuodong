'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ViewPagerAndroid
    } from 'react-native';

class Ad extends Component {

    constructor(props){
        super(props);
        this.state = {
            requestUrl: 'http://www.sunhuodong.com/api/ad/index.php',
            ads:[],
            isLoad:false,
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').width * (3 / 10),
            page:2
        };
    }

    componentDidMount(){
        this.fetchSliderImg();
    };

    fetchSliderImg(){
        fetch(this.state.requestUrl)
            .then((response) => response.json())
            .then((responseData) => {
                var ad=[];
                responseData.forEach(function(item){
                    console.log(item);
                    ad.push(item.adImgUrl);
                })
                this.setState({
                    ads:ad,
                    isLoad:true,
                });
            })
            .catch((error) => {
                this.setState({
                    isLoad:true,
                    ads:[]
                });
            })
            .done();
    }

    render() {
        //console.log(this.state.ads);
        if(this.state.isLoad && this.state.ads.length == 0 ){
            return (
                <Image
                    style={{width:this.state.width,height:this.state.height,marginTop:10,marginBottom:10}}
                    source={require('../img/ad1.jpg')}
                    />
            )
        }else{
            return (
                <ViewPagerAndroid
                    style={[styles.AdContainer,,{width:this.state.width,height:this.state.height + 20}]}
                    initialPage={0}>
                    <View>
                        <Image
                            style={[styles.AdImage,{width:this.state.width-20,height:this.state.height}]}
                            source={{uri:this.state.ads[0]}}
                            />
                    </View>
                    <View>
                        <Image
                            style={[styles.AdImage,{width:this.state.width-20,height:this.state.height}]}
                            source={{uri:this.state.ads[1]}}
                            />
                    </View>
                </ViewPagerAndroid>
            )
        }
    }
}

const styles = StyleSheet.create({
    AdContainer:{
        alignItems: 'center',
        justifyContent:'center',
    },
    AdImage:{
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'center',
        margin:10
    }
})

module.exports = Ad;