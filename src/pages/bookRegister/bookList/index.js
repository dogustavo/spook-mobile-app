import React from 'react';
import { View, Text, Image } from 'react-native';

import Screen from '../../../components/screen';
import Header from '../../../components/header';

import styles from './style';

import booksData from '../../../components/JSON/book';

const BookList = () => {

    return (
        <Screen color="#FFF">
            <View style={styles.container}>
                <View style={styles.header}>
                    <Header/>
                </View>
                <View 
                    style={styles.cardContainer}
                >
                    {
                        booksData.map((book, index) => (
                            
                            <View key={book.id} style={{...styles.card, zIndex: booksData.length - index}}>
                                <Image
                                    source={{uri: `${book.photo}`}}
                                    style={styles.bookPhoto}
                                />

                                <View style={styles.wrapBookName}>
                                    <Text style={styles.bookName}>{book.name}</Text>
                                </View>
                            </View>
                            
                        ))
                    }  
                </View>
            </View>
        </Screen>
    );
};
export default BookList;
