import React from 'react';
import { View, Text } from 'react-native';

import ModalTemplate from '../../../components/modal';

const UserRegister = ({ navigation }) => {
    return (
        <ModalTemplate
            navigateTo={'AuthLogin'}
            navigation={navigation}
        >
            <View>
                <Text>
                    Tela
                </Text>
            </View>
        </ModalTemplate> 
    )
}

export default UserRegister