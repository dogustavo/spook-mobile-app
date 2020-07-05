import React, {useEffect, useState, useRef} from 'react';
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

const position = new Animated.ValueXY({ x: 0, y: 0 });

const Book = ({ book, swippable, onLike, onDislike, navigation }) => {  
    const forceSwipe = (direction, cb) => {
        const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
        Animated.timing(position, {
            toValue: { x, y: 0 },
            duration: SWIPE_OUT_DURATION,
            useNativeDriver: true
        }).start(() =>{
            position.setValue({ x: 0, y: 0 });
            cb()
        });
    }

    const panResponder = useRef(PanResponder.create({
        onStartShouldSetPanResponder:(evt, gestureState) => true,
        onPanResponderMove:(evt, gestureState) => {
            position.setValue({ x: gestureState.dx, y: gestureState.dy });
        } ,
        onPanResponderRelease:(evt, gestureState) => {
            if (gestureState.dx > 1 * SCREEN_WIDTH * 0.4) {
                forceSwipe('right', () => onLike(book))
            } else if (gestureState.dx < -1 * SCREEN_WIDTH * 0.4) {
                forceSwipe('left', () => onDislike(book))
            } else {
               Animated.spring(position, {
                   toValue: {x: 0, y: 0},
                   friction: 4,
                   useNativeDriver: true
               }).start()
            }
        }
    })).current

    const rotate = position.x.interpolate({
        inputRange: [-SCREEN_WIDTH / 2, SCREEN_WIDTH / 2],
        outputRange: ['-30deg', '30deg']
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

    if (swippable)
        return (
            <Animated.View 
                {...panResponder.panHandlers}
                style={{
                    ...styles.card,
                    transform: [{rotate}]
                }}
            >
                <View style={styles.wrapDistance}>
                    <MapPin/>
                    <Text style={styles.distance}>
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

                <TouchableOpacity
                    style={styles.wrapBookName}
                    onPress={() => navigation.navigate('BookModalDetails', { ...book })}
                >
                    <Text style={styles.bookName}>{book.name}</Text>
                </TouchableOpacity>
            </Animated.View>
        )

    return (
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
                <Text style={styles.distance}>
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
}

const BookList = () => {
    const navigation = useNavigation()
    
    const [books, setBooks] = useState(booksData);

    const removeFirstBook = () => {
        setBooks(([, ...prev]) => prev);
    }

    const handleLike = (book) => {
        removeFirstBook()

        if(book.like === true) {
            navigation.navigate('MatchScreen', {...book})
        }
    }

    const handleDislike = (setBooks) => {
        removeFirstBook()
    }
    
    return (
        <Screen color="#FFF">
            <View style={styles.container}>
                <View style={styles.header}>
                    <Header/>
                </View>
                <View 
                    style={styles.cardContainer}
                >
                    {books.map((book, index) => {
                        return (
                            <Book
                                key={book.id}
                                book={book}
                                onLike={handleLike}
                                onDislike={handleDislike}
                                swippable={index == 0}
                                navigation={navigation}
                            />
                        )
                    }).reverse()}
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
