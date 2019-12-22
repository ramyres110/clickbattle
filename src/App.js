import React, { useState, useEffect } from 'react';
import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';

import styles from './App.style';

const Home = ({
  gamerName,
  setGamerName,
  handleStartSigleClick,
  handleStartVersusClick
}) => (
    <>
      <StatusBar backgroundColor="black" barStyle="dark-content" />
      <View style={styles.body}>
        <Text style={styles.header}> Click Battle </Text>
        <View>
          <TextInput
            autoCompleteType="name"
            inlineImageLeft="search_icon"
            placeholder="Your Gamer Name"
            style={styles.input}
            onChangeText={text => setGamerName(text)}
            value={gamerName}
          />
          <TouchableOpacity style={styles.btn} onPress={handleStartSigleClick}>
            <Text style={styles.btnLabel}>Start Single Player</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={handleStartVersusClick}>
            <Text style={styles.btnLabel}>Start Versus Player</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );

const Single = ({ handleBackClick }) => {
  const handleCloseClick = (ev) => {
    ev.preventDefault();
    handleBackClick();
  }

  return (
    <>
      <StatusBar backgroundColor="black" barStyle="dark-content" />
      <View style={styles.navbar}>
        <Text style={styles.navbarLabel}>Single</Text>
      </View>
      <View style={{ backgroundColor: '#F0F', flex: 1 }}>
        <TouchableOpacity onPress={handleCloseClick} style={styles.btnClose}>
          <Text style={styles.btnCloseLabel}>x</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const Versus = ({ handleBackClick }) => {
  const [play1, setPlay1] = useState(0);
  const [play2, setPlay2] = useState(0);
  const [watch, setWatch] = useState(10);
  const [started, setStarted] = useState(false);

  let timer = null;

  const handleCloseClick = (ev) => {
    ev.preventDefault();
    handleBackClick();
  }

  const handlerStart = () => {
    setStarted(true);
  };

  const handleClick = (player) => {
    if (player === 1) setPlay1(play1 + 1);
    if (player === 2) setPlay2(play2 + 1);
  }


  setTimeout(() => {
    if (started) {
      if (watch > 0) {
        const w = watch - 1;
        setWatch(w);
      }
    }
  }, 1000)

  useEffect(() => {

    Alert.alert(
      'Click Battle',
      'You will have 60 seconds to click, who that click more wins.',
      [
        {
          text: 'Start the timer',
          onPress: handlerStart
        }
      ],
      { cancelable: true }
    );
  }, []);


  return (
    <>
      <StatusBar backgroundColor="gray" barStyle="dark-content" />
      <View style={styles.game}>
        <View style={styles.gamePlay}>
          <TouchableOpacity onPress={() => handleClick(2)} style={{ transform: [{ rotate: '180deg' }], ...styles.btnClick }}>
            <Text style={styles.btnClickLabel}>CLICK</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.gamePlayScore}>
          <View style={{ transform: [{ rotate: '180deg' }], backgroundColor: '#333', ...styles.scoreView }}>
            <Text style={styles.scoreLabel}>Player 2</Text>
            <Text style={styles.scoreLabel}>{`00:${watch}`}</Text>
            <Text style={styles.scoreLabel}>{play2}</Text>
          </View>
          <View style={styles.scoreView}>
            <Text style={styles.scoreLabel}>Player 1</Text>
            <Text style={styles.scoreLabel}>{`00:${watch}`}</Text>
            <Text style={styles.scoreLabel}>{play1}</Text>
          </View>
        </View>
        <View style={styles.gamePlay}>
          <TouchableOpacity onPress={() => handleClick(1)} style={styles.btnClick}>
            <Text style={styles.btnClickLabel}>CLICK</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleCloseClick} style={styles.btnClose}>
            <Text style={styles.btnCloseLabel}>x</Text>
          </TouchableOpacity>

        </View>
      </View>
    </>
  );
};

const App = () => {
  const [gameType, setGameType] = useState(null);
  const [gamerName, setGamerName] = useState('');

  const handleBackClick = ev => {
    setGameType(null);
  };

  const handleStartSigleClick = ev => {
    ev.preventDefault();
    if (!gamerName) {
      Alert.alert(
        'Click Battle',
        'You need informe your gamer name to start with single player',
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed')
          }
        ],
        { cancelable: true }
      );
      return;
    }
    setGameType('single');
  };
  const handleStartVersusClick = ev => {
    setGameType('versus');
  };

  if (gameType) {
    if (gameType === 'single') {
      return <Single handleBackClick={handleBackClick} />;
    }
    if (gameType === 'versus') {
      return <Versus handleBackClick={handleBackClick} />;
    }
  }

  return (
    <Home
      gamerName={gamerName}
      setGamerName={setGamerName}
      handleStartSigleClick={handleStartSigleClick}
      handleStartVersusClick={handleStartVersusClick}
    />
  );
};

export default App;
