import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import matchText from '../.../../../../../assets/matchScreen.png'

import styles from './style';

const MatchScreen = ({route, navigation}) => {
    const book = route.params
    return (
        <View style={styles.container}>
            <View style={styles.overlay}/>
            <Image
                source={{uri: `${book.photo}`}}
                style={styles.photo}
            />

            <View
                style={styles.wrapMatch}
            >
                <Image
                    source={matchText}
                    style={styles.itsMatch}
                />

                <TouchableOpacity
                    style={styles.button}
                >
                    <Text
                        style={styles.buttonText}
                        onPress={() => navigation.goBack()}
                    >
                        Continue deslizando
                    </Text>
                </TouchableOpacity>
            </View>

            
        </View>
    )
}

export default MatchScreen