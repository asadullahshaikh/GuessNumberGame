import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const Input = props => {
  return <TextInput style={{...styles.input, ...props.style}} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    marginVertical: 10,
    width: '15%',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default Input;
