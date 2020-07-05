import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../styles/colors';

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        width: width,
        height: 55,
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20
    },
    menuButton: {
        height: 50,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonSelected: {
        height: 55,
        width: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 5,
        borderBottomColor: colors.tartOrange,
    }
})

export default styles;