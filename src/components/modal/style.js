import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';


const styles = StyleSheet.create({
    modalStyle:{
        position: 'relative',
        height: '100%',
        width: '100%',
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0, 0.7)',
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0,
    },
    modalView: {
        zIndex: 2,
        position: 'absolute',
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
        height: '70%',
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    wrapBackButton: {
        position: 'absolute',
        top: 30,
        left: 30
    },  
})

export default styles