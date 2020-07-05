import React from 'react';

import { View, TextInput, Text } from 'react-native';

import ModalSelector from 'react-native-modal-selector';

import style from './style';

const Select = ({data, placeholder, value, onChange}) => {

  console.log(data[1])
  return (

    <View style={style.Container}>
      <ModalSelector
        data={data}
        style={style.TextDecoration}
        initValue={data[1].label}
        supportedOrientations={['landscape']}
        accessible={true}
        scrollViewAccessibilityLabel={'Scrollable options'}
        onChange={onChange}
        >

        <TextInput
            style={style.ItemStyle}
            editable={false}
            placeholder={placeholder}
            value={value} />

        <Text style={style.Triangulo}>▼</Text>

      </ModalSelector>
    </View>
  );
}

export default Select;