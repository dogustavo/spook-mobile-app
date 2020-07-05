import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // position: 'relative'
    },
    inputs: {
        alignSelf: 'center',
        height: 46,
        width: 310,
        paddingLeft: 40,
        borderWidth: 1,
        borderColor: colors.jet,
        borderRadius: 7,
        paddingHorizontal: 20,
        borderStyle: 'solid',
        color: colors.jet,
        marginTop: 10
    },
    textArea: {
        textAlignVertical: "top",
        height: 126,
        width: 310,
        paddingLeft: 40,
        marginTop: 10,
        borderWidth: 1,
        borderColor: colors.jet,
        borderRadius: 7,
        paddingHorizontal: 20,
        borderStyle: 'solid',
        color: colors.jet,
    },
    icon: {
        position: 'absolute',
        top: 22,
        left: 10
    }
})

export default styles