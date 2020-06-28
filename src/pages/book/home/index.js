import React from 'react';
import { View, Text } from 'react-native';

import Screen from '../../../components/screen';

import styles from './style';

const Home = () => {
    return (
        <Screen>
            <View style={styles.container}>
                <Text style={styles.text}>
                    Olá
                </Text>
            </View>
        </Screen>
        
    )
}

export default Home