import React, {useEffect, useState} from 'react';
import { View, Text, Image, Animated, Dimensions, PanResponder } from 'react-native';

import Screen from '../../../components/screen';
import Header from '../../../components/header';

import styles from './style';

import booksData from '../../../components/JSON/book';

const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;
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
            if (gestureState.dx > SWIPE_THRESHOLD) {
                console.log('swipe right');
            } else if (gestureState.dx < -SWIPE_THRESHOLD) {
                forceSwipe('left')
            } else {
               Animated.spring(position, {
                   toValue: {x: 0, y: 0},
                   useNativeDriver: true
               }).start()
            }
        }
    })

    const onSwipeComplete = (direction) => {
        const item = data[current];

        direction === 'right' ? setLike(item) : setDislike(item);
        position.setValue({ x: 0, y: 0 });
        setCurrent(current + 1)
    }

    const forceSwipe = (direction) => {
        const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
        Animated.timing(position, {
          toValue: { x, y: 0 },
          duration: SWIPE_OUT_DURATION,
          useNativeDriver: true
        }).start(() => onSwipeComplete(direction));
      }

    const rotate = position.x.interpolate({
        inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
        outputRange: ['-120deg', '0deg', '120deg']
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
                        booksData.map((book, index) => {
                            return index === 0 ? (
                                <Animated.View 
                                    key={book.id} 
                                    {...panResponder.panHandlers}
                                    style={{
                                        ...styles.card,
                                        transform: [{rotate}]
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
                            ) : (
                                <View 
                                    key={book.id} 
                                    style={styles.card}
                                >
                                    <Image
                                        source={{uri: `${book.photo}`}}
                                        style={styles.bookPhoto}
                                    />

                                    <View style={styles.wrapBookName}>
                                        <Text style={styles.bookName}>{book.name}</Text>
                                    </View>
                                </View>
                            )
                        }).reverse()
                    }  
                </View>
            </View>
        </Screen>
    );
};
export default BookList;
