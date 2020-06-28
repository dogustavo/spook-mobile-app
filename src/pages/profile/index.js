import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Screen from '../../components/screen';
import Header from '../../components/header';

import SettingsIcon from '../../components/svg/settingsIcon';
import BookIcon from '../../components/svg/bookIcon';

import styles from './style';

const Profile = () => {
    const user = {
        name: 'Gustavo Oliveira',
        age: '22',
    }
    return (
        <Screen>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Header/>
                </View>
                <View style={styles.warpUser}>
                    <View style={styles.userPhoto}/>

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
            </View>
        </Screen>
        
    )
}

export default Profile