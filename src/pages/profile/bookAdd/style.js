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
       marginTop: 20,
       marginBottom: 40
    },
    photo: {
        width: 80,
        height: 80,
        borderRadius: 80 / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    select: {
        alignSelf: 'center',
        backgroundColor: '#040F0F', 
        height: 46,
        width: 310,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 7,
        paddingHorizontal: 20,
        borderStyle: 'solid',
        color: '#FFF',
        marginTop: 10
    }
});

export default styles;
