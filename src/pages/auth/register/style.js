/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 80,
        alignItems: 'center',
    },
    addPhoto: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.jet
    },
    wrapButton: {
       marginTop: 20
    },
    photo: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default styles;
