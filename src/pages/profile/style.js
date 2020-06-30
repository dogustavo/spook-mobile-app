/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        padding: 20,
        alignItems: 'center',
    },
    header: {
        position: 'absolute',
        top: 0
    },
    warpUser: {
        width: '100%',
        height: 180,
        backgroundColor: colors.white,
        borderRadius: 20,
        top: 50,
        position: 'relative'
    },  
    userPhoto:{
        width: 110,
        height: 110,
        backgroundColor: colors.melachite,
        borderRadius: 110 / 2,
        top: -50,
        alignSelf: 'center',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    wrapUserDetails: {
        alignSelf: 'center',
    },  
    userText: {
        fontSize: 16,
        fontWeight: 'bold',
        top: -20,
    },
    text: {
        color: colors.white
    },
    wrapButtons: {
        alignSelf: 'center',
        flexDirection: 'row',
        width: 100,
        justifyContent: 'space-between',
    },
    userButton: {
        width: 20,
        height: 10
    },
    buttonLogout: {
        position: 'absolute',
        bottom: 90
    }
});

export default styles;
