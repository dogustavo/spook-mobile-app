import React, {useEffect, useState} from 'react';
import { View, Text, Image, Animated, Dimensions, PanResponder, TouchableOpacity } from 'react-native';

import Screen from '../../../components/screen';
import Header from '../../../components/header';

import Deslike from '../../../assets/deslike.png';
import Like from '../../../assets/like.png';
import MapPin from '../../../components/svg/mapPin';
import Heart from '../../../components/svg/heart';
import Dislike from '../../../components/svg/xIcon';
import ArrowTop from '../../../components/svg/arrowTop'

import styles from './style';

import booksData from '../../../components/JSON/book';
import { useNavigation } from '@react-navigation/native';

const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;
const SCREEN_WIDTH = Dimensions.get('window').width
const position = new Animated.ValueXY();


const BookList = () => {
    const [ current, setCurrent ] = useState(0);
    const navigation = useNavigation()

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder:(evt, gestureState) => true,
        onPanResponderMove:(evt, gestureState) => {
            position.setValue({ x: gestureState.dx, y: gestureState.dy });
        } ,
        onPanResponderRelease:(evt, gestureState) => {
            if (gestureState.dx > 1 * SCREEN_WIDTH * 0.4) {
                console.log('swipe right');
                forceSwipe('right')
                likeFunction()
            } else if (gestureState.dx < -1 * SCREEN_WIDTH * 0.4) {
                // dislikeFunction()
                console.log('Deslizou para esquerda')
                forceSwipe('left')
            } else {
               Animated.spring(position, {
                   toValue: {x: 0, y: 0},
                   friction: 4,
                   useNativeDriver: true
               }).start()
            }
        }
    })

    const forceSwipe = (direction) => {
        const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
        Animated.timing(position, {
            toValue: { x, y: 0 },
            duration: SWIPE_OUT_DURATION,
            useNativeDriver: true
        }).start(() =>{
            position.setValue({ x: 0, y: 0 });
            setCurrent(current +1)
        });
    }

    const likeFunction = () => {
        const [user, ...rest] = booksData;
        if(user.like === true) {
            navigation.navigate('Profile')
        }
    }

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

    const nextCardOpacity = position.x.interpolate({
        inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
        outputRange: [1, 0, 1],
        extrapolate: 'clamp'
    })
    const nextCardScale = position.x.interpolate({
        inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
        outputRange: [1, 0.8, 1],
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
                            {
                                console.log('index, current', index, current)
                            }
                            return index == current ? (
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
                                <Animated.View 
                                    key={book.id} 
                                    style={{
                                        ...styles.card,
                                        opacity: nextCardOpacity,
                                        transform: [{ scale: nextCardScale }]
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
                            )
                        }).reverse()
                    }  
                </View>
                <View style={styles.wrapButtons}>
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Dislike/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Heart/>
                    </TouchableOpacity>
                </View>
            </View>
        </Screen>
    );
};
export default BookList;
