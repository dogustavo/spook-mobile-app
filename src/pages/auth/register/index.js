import React, {useState} from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import ModalTemplate from '../../../components/modal';
import AddPhoto from '../../../components/svg/addPhoto';
import PersonalizedInput from '../../../components/input';
import Button from '../../../components/button';

import styles from './style';
import colors from '../../../styles/colors';

import ImagePicker from 'react-native-image-crop-picker';

const UserRegister = ({ navigation }) => {
    const [photoData, setPhotoData]       = useState({});
    const [photo, setPhoto]               = useState({});

    const handlePhoto = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            includeBase64: true
        }).then(image => {
            console.log(image);
            setPhotoData(image)
            setPhoto(`data:image/gif;base64,${image.data}`)
        })
    }

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