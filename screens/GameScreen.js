import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Button,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};
const renderListItem = (numOfRound, value) => (
  <View style={styles.listItem}>
    <Text>#{numOfRound - value.index}</Text>
    <Text>{value.item}</Text>
  </View>
);
const GameScreen = props => {
  const initialGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  //   const [rounds, setRounds] = useState(0);
  const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  useEffect(() => {
    if (currentGuess === props.userChoice) {
      props.onGameOver(pastGuesses.length);
    }
  }, [currentGuess, props.userChoice, props.onGameOver]);

  const nextGuessHandler = direction => {
    if (
      (direction === 'lower' && currentGuess < props.userChoice) ||
      (direction === 'greater' && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie", 'You know this is wrong', [
        {text: 'Sorry!', style: 'cancel'},
      ]);
      return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextGuess = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess,
    );
    setCurrentGuess(nextGuess);
    // setRounds(cureRounds => cureRounds + 1);
    setPastGuesses(curPastGuesses => [nextGuess.toString(), ...curPastGuesses]);
  };
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')} />
        <Button
          title="GREATER"
          onPress={nextGuessHandler.bind(this, 'greater')}
        />
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          contentContainerStyle={styles.list}
          data={pastGuesses}
          renderItem={renderListItem.bind(this, pastGuesses.length)}
        />
        {/* <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) =>
            renderListItem(guess, pastGuesses.length - index),
          )}
        </ScrollView> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
  listItem: {
    borderColor: 'black',
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  listContainer: {
    width: '60%',
    flex: 1,
  },
  // list: {
  //   alignItems: 'center',
  // },
});

export default GameScreen;
