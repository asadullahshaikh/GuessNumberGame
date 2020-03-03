import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import MainButton from '../components/MainButton';
const Screen = props => {
  const [enteredNumber, setEnteredNumber] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState('');

  const numberInputHandler = inputText => {
    setEnteredNumber(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredNumber('');
    setConfirmed(false);
  };
  const confirmInputHandler = () => {
    const choosenNumber = parseInt(enteredNumber);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert(
        'Invalid Number!',
        ' Nmuber has to be a number between 1 and 99',
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}],
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(parseInt(enteredNumber));
    setEnteredNumber('');
    Keyboard.dismiss();
  };
  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card>
        <Text style={{textAlign: 'center'}}>Choosen Number </Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPress={() => props.onStartGame(selectedNumber)}>
          Start Game
        </MainButton>
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        <Text style={styles.title}>{props.title}</Text>
        <Card style={styles.inputContaier}>
          <Text style={styles.title}>Start New Game</Text>
          <Input
            maxLength={2}
            keyboardType={'numeric'}
            onChangeText={numberInputHandler}
            value={enteredNumber}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title={'Confirm'}
                onPress={confirmInputHandler}
                color={Colors.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title={'Reset'}
                onPress={resetInputHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  button: {
    width: 100,
  },
  inputContaier: {
    width: 300,
    maxWidth: '80%',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    marginVertical: 10,
    width: '15%',
    textAlign: 'center',
    fontSize: 15,
  },
  buttonContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Screen;
