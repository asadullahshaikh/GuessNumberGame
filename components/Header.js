import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Colors from '../constants/colors';
const Header = props => {
  return (
    <View style={styles.Header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: 'black',
  },
});

export default Header;
