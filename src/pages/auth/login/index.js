import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Input from './components/inputs';
import Screen from '../../../components/screen';
import SpookLogo from '../../../assets/logo.png';

import styles from './style';

const AuthLogin = () => {
    return (
        <Screen>
            <View style={styles.container}>
                <Image source={SpookLogo} style={styles.spookLogo}/>
                <Input
                    placeholder='E-MAIL'
                    secureTextEntry={false}
                />
                <Input
                    placeholder='SENHA'
                    secureTextEntry={true}
                />

                <View style={styles.wrapSpan}>
                    <TouchableOpacity>
                        <Text style={styles.span}>Esqueci minha senha</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.span}>Criar conta</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={styles.buttonText}>INICIAR</Text>
                </TouchableOpacity>
            </View>
        </Screen>
    )
}

export default AuthLogin;