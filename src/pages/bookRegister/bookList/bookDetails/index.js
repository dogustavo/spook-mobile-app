import React from 'react';
import { View, Text } from 'react-native';

import ModalTemplate from '../../../../components/modal';
import PinMap from '../../../../components/svg/mapPin';

import styles from './style';

const size = {
    width: 40,
    height: 40,
}

const BookModalDetails = ({ route, navigation }) => {
    console.log(navigation)
    const book = route.params
    return (
        <ModalTemplate>
            <View style={styles.constainer}>
                <Text style={styles.bookName}>{book.name}</Text>
                <Text style={styles.bookDescription}>{book.description}</Text>
                <View style={styles.wrapOthersInfos}>
                    <View>
                        <View style={styles.wrapTitleAndInfo}>
                            <Text style={styles.otherInfoTitle}>Condição: </Text> 
                            <Text>{book.condition}</Text>
                        </View>
                        <View style={styles.wrapTitleAndInfo}>
                            <Text style={styles.otherInfoTitle}>Autor: </Text> 
                            <Text> {book.author}</Text>
                        </View>
                        <View style={styles.wrapTitleAndInfo}>
                            <Text style={styles.otherInfoTitle}>Editora: </Text> 
                            <Text>{book.publisher}</Text>
                        </View>
                    </View>
                    <View style={styles.wrapDistance}>
                        <PinMap {...size} color={'#000'}/>
                        <Text style={styles.distanceText}>{book.distance}</Text>
                    </View>
                </View>
            </View>
        </ModalTemplate>
    )
   
}

export default BookModalDetails;