import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../styles/colors';

const { heigth, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    header: {
        position: 'absolute',
        top: 0
    },
    cardContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        maxHeight: 550,
        position: 'relative',
    },
    card: {
        overflow: 'hidden',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    bookPhoto: {
        width: 350,
        height: 500,
        borderRadius: 20,
    },
    wrapBookName: {
        width: 350,
        position: 'absolute',
        height: 120,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        bottom: 25,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    bookName: {
        textAlign: 'center',
        color: colors.white,
        fontSize: 18,
        paddingTop: 10
    },
    
    

});

export default styles;
