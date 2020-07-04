import React, {useEffect, useState} from 'react';
import { View, Text, Image, Animated, Dimensions, PanResponder } from 'react-native';

import Screen from '../../../components/screen';
import Header from '../../../components/header';

import Deslike from '../../../assets/deslike.png';
import Like from '../../../assets/like.png';
import MapPin from '../../../components/svg/mapPin';

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
            if (gestureState.dx > 1 * SCREEN_WIDTH * 0.4) {
                console.log('swipe right');
            } else if (gestureState.dx < -1 * SCREEN_WIDTH * 0.4) {
                console.log('Deslizou para esquerda')
            } else {
               Animated.spring(position, {
                   toValue: {x: 0, y: 0},
                   useNativeDriver: true
               }).start()
            }
        }
    })

    const rotate = position.x.interpolate({
        inputRange: [-SCREEN_WIDTH / 2, SCREEN_WIDTH / 2],
        outputRange: ['-45deg', '45deg']
    })

    const likeOpacity = position.x.interpolate({
        inputRange: [0, SCREEN_WIDTH/4],
        outputRange: [0, 1],
        extrapolate: 'clamp'
    })
    
    const dislikeOpacity = position.x.interpolate({
        inputRange: [-SCREEN_WIDTH/4, 0],
        outputRange: [1, 0],
        extrapolate: 'clamp'
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
                                    <View style={styles.wrapDistance}>
                                        <MapPin/>

                                        <Text
                                            style={styles.distance}
                                        >
                                            {book.distance}
                                        </Text>
                                    </View>
                                    <View style={styles.wrapLikeAndDeslike}>
                                        <Animated.Image
                                            source={Deslike}
                                            style={{
                                                ...styles.deslike,
                                                opacity: dislikeOpacity
                                            }}
                                        />
                                        <Animated.Image
                                            source={Like}
                                            style={{
                                                ...styles.like,
                                                opacity: likeOpacity
                                            }}
                                        />
                                    </View>
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
