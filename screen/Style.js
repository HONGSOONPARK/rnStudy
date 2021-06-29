/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { useState } from 'react';
import {
  Button,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



import { styles } from '../config/globalStyles';

export default Style = () => {

  const [name, setName] = useState('Style Test');

  const onClickHandler = () => {
    setName('Style Test is Done');
  }

  return (
    <View style={localStyle.body}>

      <Text style={localStyle.text}>집가고싶다 a b c :{name}</Text>
      <View style={localStyle.button}>
        <Button title='왕버튼' onPress={onClickHandler} ></Button>
      </View>

      <View style={composeContainer}>
        <Text>컴포즈컨테이넛뜨</Text>
      </View>

    </View>
  );

}

const localStyle = StyleSheet.create({
  body: {
    width: '100%',
    height: '50%',
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 20,
    borderColor: '#E5D85C',
    borderRadius: 10,
    margin: 0,
  },
  text: {
    color: '#ffffff',
  },

  button: {
    width: 200,
    height: 50,
  },
});

const listStyle = StyleSheet.create({
  list: {
    backgroundColor: '#99dafb',
    justifyContent: 'center',
    alignItems: 'flex-end',
  }
});

const boxStyle = StyleSheet.create({
  box: {
    width:250,
    fontStyle: 'italic',
    fontSize: 30,
    borderWidth:2,
    padding: 15,
    fontWeight: "500",
  }
});

const composeContainer = StyleSheet.compose(listStyle.list, boxStyle.box);