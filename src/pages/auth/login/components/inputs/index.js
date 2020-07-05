import React from 'react';
import { View, TextInput } from 'react-native';

import styles from './style';

const Input = ({placeholder, secureTextEntry, value, textChange, name}) => {
    return (
        <View>
            <TextInput 
                name={name}
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.inputs}
                value={value}
                onChangeText={textChange}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                placeholderTextColor='#FFF'
            />  
        </View>
    )
}

export default Input;