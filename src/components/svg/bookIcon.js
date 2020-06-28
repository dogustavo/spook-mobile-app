import React from 'react';
import { View } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';

export default props => {
    return (
        <View>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <G id="24 / basic / book">
                    <Path id="icon" fill-rule="evenodd" clip-rule="evenodd" d="M21 22H6C4.34315 22 3 20.6569 3 19V5C3 3.34315 4.34315 2 6 2H21V18C20.4477 18 20 18.4477 20 19C20 19.5523 20.4477 20 21 20V22ZM18 19C18 18.6494 18.0602 18.3128 18.1707 18H6C5.44772 18 5 18.4477 5 19C5 19.5523 5.44772 20 6 20H18.1707C18.0602 19.6872 18 19.3506 18 19ZM6 4H19V16H6C5.64936 16 5.31278 16.0602 5 16.1707V5C5 4.44772 5.44772 4 6 4Z" fill="black"/>
                </G>
            </Svg>
        </View>
    )
}