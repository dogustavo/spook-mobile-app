/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './style';

const Buttons = ({ text, bgColor, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                ...styles.buttonRegister,
                backgroundColor: bgColor
            }}
        >
            <Text
                style={styles.buttonText}
            >
                {text}
            </Text>
        </TouchableOpacity>
    );
};

export default Buttons;
