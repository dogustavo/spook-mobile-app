import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../styles/colors';

const styles = StyleSheet.create({
    buttonRegister: {
        height: 50,
        width: 310,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.melachite,
        borderRadius: 7,
        marginTop: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    buttonText: {
        color: colors.white,
        fontSize: 14,
        fontWeight: 'bold'
    }
})

export default styles