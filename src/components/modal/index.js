import React, { useState, useEffect } from 'react';
import { View, Animated, Dimensions, TouchableOpacity, Text } from 'react-native';

import BackButton from '../../components/svg/backButton';

const { height } = Dimensions.get('window');

import styles from './style'
import { useNavigation } from '@react-navigation/native';

const ModalTemplate = ({children, navigateTo}) => {
    const [overlayAnimation] = useState(new Animated.Value(height));
	const [fadeBackground] = useState(new Animated.Value(0));
    const [ showModal ] = useState(new Animated.Value(height));

    const navigation = useNavigation()

	const openModal = () => {
		Animated.sequence([
			Animated.timing(fadeBackground, {
				toValue: 1,
                duration: 300,
                useNativeDriver: true,
			}),
			Animated.timing(overlayAnimation, {
				toValue: 0,
                duration: 10,
                useNativeDriver: true,
			}),
			Animated.spring(showModal, {
				toValue: 0,
				bounciness: 5,
				useNativeDriver: true,
			})
		]).start();
	};

	const closeModal = () => {
		Animated.sequence([
			Animated.timing(showModal, {
				toValue: height,
				duration: 200,
				useNativeDriver: true,
			}),
			Animated.timing(fadeBackground, {
				toValue: 0,
                duration: 100,
                useNativeDriver: true,
			}),
			Animated.timing(overlayAnimation, {
				toValue: height,
                duration: 50,
                useNativeDriver: true,
			}),
        ]).start(() => {
            navigation.goBack()
        });
    }

    useEffect(() => {
		openModal();
	}, [])
    return (
        <View
            style={styles.modalStyle}
        >
            <Animated.View
                style={{
                    ...styles.overlay, 
                    opacity: fadeBackground,
                    transform: [
                        { translateY: overlayAnimation }
                    ]
                }}
            />
            <Animated.View
                style={{
                    ...styles.modalView,
                    transform: [
                        { translateY: showModal }
                    ]
                }}
            >
                <TouchableOpacity
                    onPress={() => {
                        closeModal()
                    }}
                    style={styles.wrapBackButton}
                >
                    <BackButton style={styles.backButton}/>
                </TouchableOpacity>

                {children}

            </Animated.View>
        </View>
    )
}

export default ModalTemplate