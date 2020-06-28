/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import BookIcon from '../svg/bookIcon';
import SettingsIcon from '../svg/settingsIcon';
import ChatIcon from '../svg/chatIcon';

import colors from '../../styles/colors';

import styles from './style';

const Header = () => {

    const { isAuth } = useSelector(state => state.auth);
    const currentScreen = useSelector(state => state.navigation.currentScreen);
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Profile')}
                style={{
                    ...styles.menuButton,
                    ...(currentScreen == 'Profile' && styles.buttonSelected)
                }}
            >
                {
                    currentScreen == 'Profile'
                                ? <SettingsIcon color={colors.tartOrange}/>
                                : <SettingsIcon/>
                }
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('AppNavigator')}
                style={{
                    ...styles.menuButton,
                    ...(currentScreen == 'BookList' && styles.buttonSelected)
                }}
            >
                {
                    currentScreen == 'BookList'
                                ? <BookIcon color={colors.tartOrange}/>
                                : <BookIcon/>
                }
                
            </TouchableOpacity>
            <TouchableOpacity
                // onPress={() => navigation.navigate('Profile')}
                style={{
                    ...styles.menuButton,
                }}
            >
                {/* {
                    currentScreen == 'Profile'
                                ? <ChatIcon color={colors.tartOrange}/>
                                : <ChatIcon/>
                } */}
                 <ChatIcon/>
            </TouchableOpacity>
        </View>
    );
};

export default Header;
