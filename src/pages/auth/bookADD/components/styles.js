import { StyleSheet } from 'react-native';
import colors from '../../../../styles/colors'

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    color: '#FFF',
    borderColor: '#6c6c73',
    borderRadius: 7, 
    justifyContent: 'center',
    flexDirection: 'row'
  },
  picker: {
    height: 46,
    width: 310,
    borderColor: colors.jet,
    borderRadius: 7,
    borderStyle: 'solid',
    color: colors.jet,
  },
  pickerItem: {
  }
});

export default styles;