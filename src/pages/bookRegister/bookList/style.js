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
        width: 300,
        position: 'absolute',
        height: 80,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        bottom: 60,
        left: 21,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'center'
    },
    bookName: {
        alignSelf: 'flex-end',
        color: colors.white,
        fontSize: 28,
        fontWeight: 'bold',
        marginRight: 25,
        marginLeft: 10
    },
    wrapLikeAndDeslike: {
        position: 'absolute',
        zIndex: 2,
    },
    deslike: {
        position: 'absolute',
        width: 160,
        height: 110,
        top: -180,
        left: -160
    },
    like: {
        position: 'absolute',
        width: 160,
        height: 110,
        top: -180,
        right: -160
    },
    wrapDistance: {
        position: 'absolute',
        zIndex: 2,
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: 100,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        top: 40,
        left: 40
    },
    distance: {
        color: colors.white,
        fontSize: 20,
        marginLeft: 5,
        fontWeight: 'bold',
    },
    wrapButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 30
    },
    button: {
        width: 100,
        height: 100,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100/2,
    }
    

});

export default styles;
