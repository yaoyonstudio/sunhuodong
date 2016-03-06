'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
    } from 'react-native';

import ImageSlider from 'react-native-image-slider';

class Slider extends Component {

    constructor(props){
        super(props);
        this.state = {
            requestUrl: 'http://www.sunhuodong.com/api/slider/index.php',
            images:[],
            isLoad:false,
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').width * (4 / 9),
        };
    }

    componentDidMount(){
        this.fetchSliderImg();
    };

    fetchSliderImg(){
        fetch(this.state.requestUrl)
            .then((response) => response.json())
            .then((responseData) => {
                var imgs=[];
                responseData.forEach(function(item){
                    imgs.push(item.sliderImgUrl);
                })
                this.setState({
                    //images:responseData.length,
                    isLoad:true,
                    images:imgs
                });
            })
            .catch((error) => {
                this.setState({
                    //images:responseData.length,
                    isLoad:true,
                    images:[]
                });
            })
            .done();
    }

    render() {
        if(this.state.isLoad && this.state.images.length == 0 ){
            return (
                <Image
                    style={{width:this.state.width,height:this.state.height}}
                    source={require('../img/slider1.jpg')}
                    />
            )
        }else{
            return (
                <ImageSlider images={this.state.images} />
            )
        }
    }
}

module.exports = Slider;