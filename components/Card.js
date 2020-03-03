import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Card = props => {
  return <View style={{...styles.card, ...props.style}}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    shadowOffset: {width: 0, height: 2},
    shadowColor: 'black',
    backgroundColor: 'white',
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    borderRadius: 20,
    padding: 20,
  },
});

export default Card;
