/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';

import { requestLogin } from '../../../services/auth';
import { authLogin } from '../../../ducks/auth';
import { setToken } from '../../../utils/http';

import Input from './components/inputs';
import Screen from '../../../components/screen';
import SpookLogo from '../../../assets/logo.png';

import styles from './style';
import { useDispatch, useSelector } from 'react-redux';

const AuthLogin = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErros] = useState({});

    const isAuth = useSelector( store => store.auth.isAuth );


    const dispatch = useDispatch();

    const formSubmit = async () => {
        let inputErrors = {};

        if (email === '') {
            inputErrors.email = 'Empty';
        }

        if (password === '') {
            inputErrors.password = 'Empty';
        }

        if ( Object.keys(inputErrors).length) {
            Alert.alert('Ops', 'Campo Obrigatório');
        }

        requestLogin({ email, password })
            .then(res => {
                setToken(res.token);
                dispatch(authLogin(res.token));
            })
            .finally(() => navigation.navigate('Profile'));
    };

    const teste = () => {
        
    };

    return (
        <Screen>
            <View style={styles.container}>
                <Image source={SpookLogo} style={styles.spookLogo}/>
                <Input
                    placeholder="E-MAIL"
                    name={'email'}
                    value={email}
                    textChange={text => setEmail(text)}
                    secureTextEntry={false}
                />
                <Input
                    placeholder="SENHA"
                    name={'password'}
                    value={password}
                    textChange={text => setPassword(text)}
                    secureTextEntry={true}
                />

                <View style={styles.wrapSpan}>
                    <TouchableOpacity>
                        <Text style={styles.span}>Esqueci minha senha</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text 
                            style={styles.span}
                            onPress={ () =>
                                navigation.navigate('UserRegister')
                            }
                        >
                            Criar conta
                        </Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity 
                    style={styles.buttonLogin}
                    onPress={formSubmit}
                >
                    <Text style={styles.buttonText}>INICIAR</Text>
                </TouchableOpacity>
            </View>
        </Screen>
    );
};

export default AuthLogin;
