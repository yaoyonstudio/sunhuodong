'use strict';
import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View
    } from 'react-native';

import ImageSlider from 'react-native-image-slider';

class SliderComponent extends Component {
    render() {
        return (
            <ImageSlider images={[
                'http://www.sunhuodong.com/uploads/slider1.jpg',
                'http://www.sunhuodong.com/uploads/slider2.jpg',
                'http://www.sunhuodong.com/uploads/slider3.jpg',
                'http://www.sunhuodong.com/uploads/slider4.jpg'
            ]}/>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

module.exports = SliderComponent;