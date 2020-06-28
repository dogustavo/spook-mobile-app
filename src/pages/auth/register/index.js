import React, {useState, useCallback} from 'react';
import { View, TouchableOpacity, Image, Alert } from 'react-native';

import { saveUser } from '../../../ducks/users';

import ModalTemplate from '../../../components/modal';
import AddPhoto from '../../../components/svg/addPhoto';
import PersonalizedInput from '../../../components/input';
import Button from '../../../components/button';

import styles from './style';
import colors from '../../../styles/colors';

import ImagePicker from 'react-native-image-crop-picker';
import { useDispatch } from 'react-redux';

const UserRegister = ({ navigation }) => {
    const [avatar, setAvatar]             = useState({});
    const [photo, setPhoto]               = useState({});
    const [errors, setErros]              = useState({});
    const [form, setForm]                 = useState({
        name: '',
        email: '',
        password: '',
        data_nascimento: '',
        avatar: ''
    });

    const dispatch = useDispatch();

    const formSubmit = () => {
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
            saveUser({...form})
        );
        
    };

    const handlePhoto = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            includeBase64: true
        }).then(image => {
            console.log(image);
            setAvatar(image);
            setForm({...form, avatar: `data:image/gif;base64,${image.data}`})
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
                        Object.keys(form.avatar).length
                        ?
                            <Image
                                source={{
                                    uri: form.avatar
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
                        value={form.data_nascimento}
                        name="data_nascimento"
                        secureTextEntry={false}
                        placeholder={'Nascimento'}
                        icon={'calendar'}
                        onChangeText={event => setForm({...form, data_nascimento: event})}

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

export default UserRegister
