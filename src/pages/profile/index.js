/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';

import Screen from '../../components/screen';
import Header from '../../components/header';
import Button from '../../components/button';

import SettingsIcon from '../../components/svg/settingsIcon';
import BookIcon from '../../components/svg/bookIcon';
import ProfilePic from '../../assets/profile_pic.jpg';

import { removeToken } from '../../utils/http';

import { authLogout } from '../../ducks/auth';
import { useDispatch } from 'react-redux';

import colors from '../../styles/colors';

import styles from './style';

const Profile = () => {
    const user = {
        name: 'Lucas Filho',
        age: '26',
    };

    const dispatch = useDispatch();

    const handleLogOut = () =>  {
        removeToken();
        dispatch(authLogout());
    };

    return (
        <Screen>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Header/>
                </View>
                <View style={styles.warpUser}>
                    <Image
                        source={ProfilePic}
                        style={styles.userPhoto}
                    />

                    <View style={styles.wrapUserDetails}>
                        <Text style={styles.userText}>
                            {user.name}, {user.age}
                        </Text>
                    </View>

                    <View style={styles.wrapButtons}>
                        <TouchableOpacity styles={styles.userButton}>
                            <SettingsIcon/>
                        </TouchableOpacity>
                        <TouchableOpacity styles={styles.userButton}>
                            <BookIcon/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.buttonLogout}>
                    <Button
                        onPress={handleLogOut}
                        text={'Sair'}
                        bgColor={colors.tartOrange}
                    />
                </View>
                
            </View>
            
        </Screen>
        
    );
};

export default Profile;
