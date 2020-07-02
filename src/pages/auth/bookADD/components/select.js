import React from 'react';

import styles from './styles';

import { Picker, View } from 'react-native';

const Select = ({ options = [], selectedValue, onValueChange }) => {
  return (
                
    <View style={styles.container}>
      <View style={styles.pickerItem} />
      <Picker
        style={styles.picker}
        selectedValue={selectedValue}
        onValueChange={onValueChange}
      >
        {options.map(option => (
          <Picker.Item label={option.label} value={option.value} />
        ))}
      </Picker>
    </View>
  )
}

export default Select;