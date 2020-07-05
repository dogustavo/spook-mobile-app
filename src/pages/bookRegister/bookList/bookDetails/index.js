import React, { useState } from 'react';
import { View, Text } from 'react-native';

import ModalTemplate from '../../../../components/modal';

const BookModalDetails = ({ route, navigation }) => {
    console.log(navigation)
    const book = route.params
    return (
        <ModalTemplate
        >
            <View>
                <Text>{book.name}</Text>
                <Text>{book.description}</Text>
                <Text>{book.condition}</Text>
                <Text>{book.author}</Text>
            </View>
        </ModalTemplate>
    )
   
}

export default BookModalDetails;