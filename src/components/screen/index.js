import React from 'react';
import { View } from 'react-native';

import styles from './style'

const Screen = ({children}) => {
    return (
        <View style={styles.container}>
            <View style={styles.triangleOne}/>
            <View style={styles.triangleTwo}/>
            <View style={styles.triangleThree}/>

            { children }
        </View>
    )
}

export default Screen