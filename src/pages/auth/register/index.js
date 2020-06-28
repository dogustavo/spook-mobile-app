/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
import React, {useState, useCallback} from 'react';
import { View, TouchableOpacity, Image, Alert } from 'react-native';

import { createUser } from '../../../services/user';

import ModalTemplate from '../../../components/modal';
import AddPhoto from '../../../components/svg/addPhoto';
import PersonalizedInput from '../../../components/input';
import Button from '../../../components/button';

import styles from './style';
import colors from '../../../styles/colors';

import ImagePicker from 'react-native-image-crop-picker';
import { useDispatch } from 'react-redux';

const UserRegister = ({ navigation }) => {
    const [photoData, setPhotoData]       = useState({});
    const [photo, setPhoto]               = useState({});
    const [errors, setErros]              = useState({});
    const [form, setForm]                 = useState({
        name: '',
        email: '',
        password: '',
        age: ''
    });

    const dispatch = useDispatch();

    const formSubmit = useCallback(async () => {
        console.log('executei');
        let inputErrors = {};
        let isValid = true;
        Object.keys(form).map(index => {
            const formItem = form[index];
            if (formItem === ''){
                isValid = false;
                inputErrors[index] = 'Campo Obrigatório'; 
            }
        });
        setErros(inputErrors);
        if (!isValid) {
            Alert.alert('Ops', 'Campo Obrigatório');
        } 

        dispatch(
            createUser({...form, photoData})
                .then(() => navigation.goBack())
        );
        
    },[form, dispatch, photoData, navigation]);

    const handlePhoto = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            includeBase64: true
        }).then(image => {
            console.log(image);
            setPhotoData(image);
            setPhoto(`data:image/gif;base64,${image.data}`);
        });
    };

    return (
        <ModalTemplate
            navigateTo={'AuthLogin'}
            navigation={navigation}
        >
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={handlePhoto}
                    style={styles.addPhoto}
                >
                    {
                        Object.keys(photo).length
                        ?
                            <Image
                                source={{
                                    uri: photo
                                }}
                                style={styles.photo}
                            />
                        :
                            <AddPhoto/>
                    }
                </TouchableOpacity>

                <View>
                    <PersonalizedInput
                        value={form.name}
                        name="nome"
                        secureTextEntry={false}
                        placeholder={'Nome'}
                        icon={'profile'}
                        onChangeText={event => setForm({...form, name: event})}
                    />
                    <PersonalizedInput
                        value={form.age}
                        name="age"
                        secureTextEntry={false}
                        placeholder={'Nascimento'}
                        icon={'calendar'}
                        onChangeText={event => setForm({...form, age: event})}

                    />
                    <PersonalizedInput
                        value={form.email}
                        name="email"
                        secureTextEntry={false}
                        placeholder={'E-mail'}
                        icon={'email'}
                        onChangeText={event => setForm({...form, email: event})}

                    />
                    <PersonalizedInput
                        value={form.password}
                        name="password"
                        secureTextEntry={true}
                        placeholder={'Password'}
                        icon={'password'}
                        onChangeText={event => setForm({...form, password: event})}

                    />

                    <View style={styles.wrapButton}>
                        <Button
                            onPress={formSubmit}
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
    );
};

export default UserRegister;
