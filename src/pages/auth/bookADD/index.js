import React, { useState } from 'react';
import { View, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';

import ModalTemplate from '../../../components/modal';
import AddPhoto from '../../../components/svg/addPhoto';
import PersonalizedInput from '../../../components/input';
import Button from '../../../components/button';

import Select from './components/select';

import Stilos from './style';
import colors from '../../../styles/colors';

import ImagePicker from 'react-native-image-crop-picker';

const BookAdd = ({ navigation }) => {
    const [avatar, setAvatar]             = useState({});
    const [form, setForm]                 = useState({
        name: '',
        descricao: '',
        autor: '',
        editora: '',
        select: '',
        avatar: ''
    });

    const optionsSelect = [
        { label: "Novo", value: "1"},
        { label: "Mediano", value: "2"},
        { label: "Antigo", value: "3"}
    ]

    const formSubmit = () => {
        navigation.navigate('AuthLogin');
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
            setForm({...form, avatar: `data:image/gif;base64,${image.data}`});
        });
    };

    return (
        <ModalTemplate
            navigateTo={'AuthLogin'}
            navigation={navigation}
        >
            <View style={Stilos.container}>
                <TouchableOpacity
                    onPress={handlePhoto}
                    style={Stilos.addPhoto}
                >
                    {
                        Object.keys(form.avatar).length
                        ?
                            <Image
                                source={{
                                    uri: form.avatar
                                }}
                                style={Stilos.photo}
                            />
                        :
                            <AddPhoto/>
                    }
                </TouchableOpacity>

                <KeyboardAvoidingView style={Stilos.keyBoard}>
                    
                    <PersonalizedInput
                        value={form.name}
                        name="nome"
                        secureTextEntry={false}
                        placeholder={'nome'}
                        onChangeText={event => setForm({...form, name: event})}
                    />
                                        
                    <PersonalizedInput
                        value={form.descricao}
                        name="nome"
                        multiline={true}
                        numberOfLines={4}
                        secureTextEntry={false}
                        placeholder={'Descrição'}
                        onChangeText={event => setForm({...form, descricao: event})}
                    />

                    <Select
                        options={optionsSelect}
                        selectedValue={form.select}
                        onValueChange={(itemValue) => setForm({...form, select: itemValue})}
                    />

                                        
                    <PersonalizedInput
                        value={form.autor}
                        name="nome"
                        secureTextEntry={false}
                        placeholder={'Autor'}
                        onChangeText={event => setForm({...form, autor: event})}
                    />

                                        
                    <PersonalizedInput
                        value={form.editora}
                        name="nome"
                        secureTextEntry={false}
                        placeholder={'Editora'}
                        onChangeText={event => setForm({...form, editora: event})}
                    />
                   

                    <View style={Stilos.wrapButton}>
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
                </KeyboardAvoidingView>
            </View>
        </ModalTemplate> 
    );
};

export default BookAdd;
