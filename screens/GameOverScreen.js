import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over !</Text>
      <View style={styles.container}>
        <Image style={styles.img} source={require('../assets/success.png')} />
      </View>
      <Text>Number of rounds : {props.roundsNumber}</Text>
      <Text>
        Number was : {props.userNumber}
        {'\n'}{' '}
      </Text>
      <MainButton onPress={props.onRestart}>New Game</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },
  img: {
    width: '100%',
    height: '100%',
  },
});

export default GameOverScreen;
