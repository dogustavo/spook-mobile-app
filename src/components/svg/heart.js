import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default props => {
    return (
        <View>
            <Svg width="48" height="45" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M15.4034 0.864638C16.7649 0.214229 17.9525 -1.91094e-06 19.795 2.00011e-05C24.5101 0.0190776 28 3.90021 28 8.84407C28 12.6176 25.8442 16.2628 21.8287 19.7876C19.721 21.6377 17.03 23.4687 15.1027 24.4427L14 25L12.8973 24.4427C10.97 23.4687 8.27896 21.6377 6.17125 19.7876C2.15579 16.2628 0 12.6176 0 8.84407C0 3.84732 3.45728 0 8.21488 0C9.99126 0 11.2399 0.23449 12.6278 0.904464C13.111 1.13772 13.565 1.41441 13.9872 1.73377C14.4264 1.39544 14.8993 1.10544 15.4034 0.864638Z" fill="#FD3539"/>
            </Svg>
        </View>
    )
}