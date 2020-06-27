import React from 'react';
import { View, TextInput } from 'react-native';

import styles from './style';

const Input = ({placeholder, secureTextEntry}) => {
    return (
        <View>
            <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.inputs}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                placeholderTextColor='#FFF'
            />  
        </View>
    )
}

export default Input;