import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 80,
        alignItems: 'center'
    },
    addPhoto: {
        width: 80,
        height: 80,
        borderRadius: 80/2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.jet
    },
    buttonRegister: {
        height: 50,
        width: 310,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.melachite,
        borderRadius: 7,
        marginTop: 30,

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

export default styles;