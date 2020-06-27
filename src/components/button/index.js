import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './style';

const Buttons = ({ text, bgColor }) => {
    return (
        <TouchableOpacity
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
    )
}

export default Buttons