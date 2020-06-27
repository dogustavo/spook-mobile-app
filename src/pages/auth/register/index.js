import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import ModalTemplate from '../../../components/modal';
import AddPhoto from '../../../components/svg/addPhoto';
import PersonalizedInput from '../../../components/input';
import Button from '../../../components/button';

import styles from './style';
import colors from '../../../styles/colors';

const UserRegister = ({ navigation }) => {
    return (
        <ModalTemplate
            navigateTo={'AuthLogin'}
            navigation={navigation}
        >
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.addPhoto}
                >
                    <AddPhoto/>
                </TouchableOpacity>

                <View>
                    <PersonalizedInput
                        secureTextEntry={false}
                        placeholder={'Nome'}
                        icon={'profile'}
                    />
                    <PersonalizedInput
                        secureTextEntry={false}
                        placeholder={'Nascimento'}
                        icon={'calendar'}
                    />
                    <PersonalizedInput
                        secureTextEntry={false}
                        placeholder={'E-mail'}
                        icon={'email'}
                    />
                    <PersonalizedInput
                        secureTextEntry={true}
                        placeholder={'Password'}
                        icon={'password'}
                    />

                    <View style={styles.wrapButton}>
                        <Button
                            text={'Cadastrar'}
                            bgColor={colors.melachite}
                        />
                        <Button
                            text={'Cancelar'}
                            bgColor={colors.spanishGray}
                        />
                    </View>
                </View>
            </View>
        </ModalTemplate> 
    )
}

export default UserRegister