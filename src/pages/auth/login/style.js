import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    spookLogo: {
        width: 190,
        alignSelf: 'center'
    },
    wrapSpan: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        width: 310,
    },
    span:{
        color: '#FFF',
        textDecorationLine: 'underline',
        marginTop: 5
    },
    buttonLogin:{
        alignSelf: 'center',
        height: 46,
        width: 310,
        borderWidth: 1,
        borderColor: '#FFF',
        borderRadius: 7,
        marginTop: 20,
        backgroundColor: '#FD3539',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,     
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 18,
    },
})

export default styles