/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import { View, TextInput } from 'react-native';

import UserIcon from '../../components/svg/user';
import Calendar from '../../components/svg/calendar';
import Email from '../../components/svg/email';
import Password from '../../components/svg/password';

import colors from '../../styles/colors';
import styles from './style';

const inputIcons = {
    profile: <UserIcon/>,
    calendar: <Calendar/>,
    email: <Email/>,
    password: <Password/>
};

const PersonalizedInput = ({placeholder, secureTextEntry, onChangeText, value, name, icon}) => {
    return (
        <View>
            <View style={styles.icon}>
                {inputIcons[icon]}
            </View>
            <TextInput
                value={value}
                name={name}
                onChangeText={onChangeText}
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputs}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                placeholderTextColor={colors.jet}
            />
        </View>
    );
};

export default PersonalizedInput;
