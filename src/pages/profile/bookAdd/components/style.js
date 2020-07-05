/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    ItemStyle: {
      height: 46,
      width: 310,
      borderColor: '#000',
      padding: -2, 
    },
    TextDecoration: {
      position: 'relative',
      borderColor: '#000',
    },
    Triangulo: {
      position: 'absolute',
      top: 12,
      left: 225
    },    
    Container: {
      alignSelf: 'center',
      height: 46,
      width: 310,
      paddingLeft: 40,
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 7,
      paddingHorizontal: 20,
      borderStyle: 'solid',
      marginTop: 10
    }
});

export default styles;
