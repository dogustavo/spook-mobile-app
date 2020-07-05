/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
import React, { useState, useCallback } from 'react';
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

const PersonalizedInput = ({placeholder, textArea, multiline, numberOfLines, secureTextEntry, onChangeText, value, name, icon}) => {
    const [count, setCount] = useState(0)

    const mudou = useCallback(() => {
        setCount(count+1)
        console.log(count)
    },[count]);

    return (
        <View>
            {!textArea && (
                <View style={styles.icon}>
                    {inputIcons[icon]}
                </View>
            )}
                <TextInput
                    multiline={multiline}
                    numberOfLines={numberOfLines}
                    value={value}
                    name={name}
                    onChangeText={onChangeText}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={textArea ? styles.textArea : styles.inputs}
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    placeholderTextColor={colors.jet}
                    onContentSizeChange={mudou}
                />

        </View>
    );
};

export default PersonalizedInput;
