import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import BookIcon from '../svg/bookIcon';
import SettingsIcon from '../svg/settingsIcon';
import ChatIcon from '../svg/chatIcon';

import styles from './style'

const Header = () => {

    const { isAuth } = useSelector(state => state.auth)
    const currentScreen = useSelector(state => state.navigation.currentScreen);
    const navigation = useNavigation()

    console.log('minhoca',currentScreen)

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Profile')}
            >
                <View>
                    <SettingsIcon/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('AppNavigator')}
            >
                <View>
                    <BookIcon/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Profile')}
            >
                <View>
                    <ChatIcon/>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Header