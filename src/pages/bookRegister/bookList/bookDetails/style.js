import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        paddingVertical: 90,
        width: (width - 70),
    },
    bookName: {
        fontSize: 28,
        fontWeight: '700',
        marginBottom: 30
    },
    bookDescription: {
        fontSize: 18,
        textAlign: 'left',
        marginBottom: 30
    },
    wrapOthersInfos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    wrapTitleAndInfo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    otherInfoTitle: {
        fontSize: 16,
        fontWeight: '700',
    },
    wrapDistance: {
        flexDirection: 'row'
    },
    distanceText: {
        fontSize: 30
    },  
})

export default styles