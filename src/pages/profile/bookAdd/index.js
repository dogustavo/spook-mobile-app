import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';


import ModalTemplate from '../../../components/modal';
import AddPhoto from '../../../components/svg/addPhoto';
import PersonalizedInput from '../../../components/input';
import Button from '../../../components/button';

import Select from './components/index';

import colors from '../../../styles/colors';
import styles from './style'

import ImagePicker from 'react-native-image-crop-picker';
import { useNavigation } from '@react-navigation/native';

const BookAdd = () => {
    const navigation = useNavigation()
    const [avatar, setAvatar]             = useState({});
    const [form, setForm]                 = useState({
        name: '',
        descricao: '',
        autor: '',
        editora: '',
        select: '',
        avatar: ''
    });

    const formSubmit = () => {
        navigation.navigate('Profile');
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


    const data = [
        
        { key: 1, label: 'Novo' },
        { key: 2, label: 'Seminovo' },
        { key: 3, label: 'Usado' }
    ];

    return (
        <ModalTemplate
            navigateTo={'Profile'}
            navigation={navigation}
            shouldnClose={true}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
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

                <KeyboardAvoidingView style={styles.keyBoard}>
                    
                    <PersonalizedInput
                        value={form.name}
                        name="nome"
                        secureTextEntry={false}
                        placeholder={'Nome'}
                        onChangeText={event => setForm({...form, name: event})}
                    />

                    <Select
                        data={data}
                        placeholder={form.select.label ? form.select.label : 'Condição ' } 
                        initialValue={data}
                        value={form.select.label}
                        onChange={(option)=> setForm({...form, select: option})}
                    />
               
                    <PersonalizedInput
                        value={form.autor}
                        name="author"
                        secureTextEntry={false}
                        placeholder={'Autor'}
                        onChangeText={event => setForm({...form, autor: event})}
                    />
                                        
                    <PersonalizedInput
                        value={form.editora}
                        name="publisher"
                        secureTextEntry={false}
                        placeholder={'Editora'}
                        onChangeText={event => setForm({...form, editora: event})}
                    />           
                                                           
                   <PersonalizedInput
                        value={form.descricao}
                        name="description"
                        textArea={true}
                        multiline={true}
                        numberOfLines={5}
                        secureTextEntry={false}
                        placeholder={'Descrição'}
                        onChangeText={event => setForm({...form, descricao: event})}
                    />

                    <View style={styles.wrapButton}>
                        <Button
                            onPress={formSubmit}
                            text={'Cadastrar'}
                            bgColor={colors.melachite}
                        />
                    </View>
                </KeyboardAvoidingView>
            </View>
            </ScrollView>
        </ModalTemplate> 
    );
};

export default BookAdd;
