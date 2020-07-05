import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../../styles/colors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    overlay: {
        width: width,
        height: '100%',
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.7)',
        zIndex: 2
    },
    photo: {
        width: '100%',
        height: '100%',
        position: 'absolute'
    },
    wrapMatch: {
        width: width,
        height: '100%',
        justifyContent: 'center'
    },
    itsMatch: {
        zIndex: 3,
        alignSelf: 'center'
    },
    button: {
        height: 50,
        width: 310,
        backgroundColor: colors.melachite,
        zIndex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 7,
        marginTop: 40,
    },
    buttonText: {
        color: colors.white,
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    }
})

export default styles