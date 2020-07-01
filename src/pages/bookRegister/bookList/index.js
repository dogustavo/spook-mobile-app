import React, {useEffect, useState} from 'react';
import { View, Text, Image, Animated, Dimensions, PanResponder } from 'react-native';

import Screen from '../../../components/screen';
import Header from '../../../components/header';

import styles from './style';

import booksData from '../../../components/JSON/book';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
const position = new Animated.ValueXY();

const BookList = () => {

    const [ like, setLike ] = useState([]);
    const [ dislike, setDislike ] = useState([]);

    const [ current, setCurrent ] = useState(0);
    const [ done, setDone ] = useState(false);

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder:(evt, gestureState) => true,
        onPanResponderMove:(evt, gestureState) => {
            position.setValue({ x: gestureState.dx, y: gestureState.dy });
        } ,
        onPanResponderRelease:(evt, gestureState) => {
            if(
                position.x._value < -50 && 
                position.y._value > SCREEN_HEIGHT / 2 - 150 && 
                position.y._value < SCREEN_HEIGHT / 2 
            ) {
                Animated.spring(position, {
                    toValue: { x: -SCREEN_WIDTH - 10, y: position.y._value},
                    friction: 10,
                }).start(() => {
                    setLike([...like, booksData[current].name]);
                    if( current == booksData.length - 1 ) { 
                        setDone(true);
                        position.setValue({x: 0, y: 0})
                    }
                })
            }
            else if(
                position.x._value > 50 &&
                position.y._value > SCREEN_HEIGHT / 2 - 150 &&
                position.y._value < SCREEN_HEIGHT / 2
            ) {
                Animated.spring(position, {
                    toValue: { x: -SCREEN_WIDTH + 10, y: position.y._value},
                    friction: 10,
                }).start(() => {
                    setDislike([...like, booksData[current].name]);
                    if( current == booksData.length - 1 ) { 
                        setDone(true);
                        position.setValue({x: 0, y: 0})
                    }
                })
            }
        }
    })


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
                            
                            <Animated.View 
                                key={book.id} 
                                {...panResponder.panHandlers}
                                style={{
                                    ...styles.card,
                                    transform: position.getTranslateTransform()
                                }}
                            >
                                <Image
                                    source={{uri: `${book.photo}`}}
                                    style={styles.bookPhoto}
                                />

                                <View style={styles.wrapBookName}>
                                    <Text style={styles.bookName}>{book.name}</Text>
                                </View>
                            </Animated.View>
                            
                        )).reverse()
                    }  
                </View>
            </View>
        </Screen>
    );
};
export default BookList;
