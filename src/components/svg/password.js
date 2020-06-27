import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default props => {
    return (
        <View>
            <Svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11ZM20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11ZM10 7V9H12V7C12 6.44772 11.5523 6 11 6C10.4477 6 10 6.44772 10 7ZM14 9C15.1046 9 16 9.89543 16 11V15C16 16.1046 15.1046 17 14 17H8C6.89543 17 6 16.1046 6 15V11C6 9.89543 6.89543 9 8 9V7C8 5.34315 9.34315 4 11 4C12.6569 4 14 5.34315 14 7V9ZM8 11V15H14V11H8ZM10 13C10 13.5523 10.4477 14 11 14C11.5523 14 12 13.5523 12 13C12 12.4477 11.5523 12 11 12C10.4477 12 10 12.4477 10 13Z" fill="black"/>
            </Svg>
        </View>
    )
}