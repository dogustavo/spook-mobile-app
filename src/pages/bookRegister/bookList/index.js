/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import { View, Text } from 'react-native';

import Screen from '../../../components/screen';
import Header from '../../../components/header';

import styles from './style';

const BookList = () => {
    return (
        <Screen>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Header/>
                </View>
                <Text style={styles.text}>
                    Olá
                </Text>
            </View>
        </Screen>
    );
};
export default BookList;
