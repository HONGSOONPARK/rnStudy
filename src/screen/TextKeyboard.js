/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { useState } from 'react';
import {
  Button,
  Linking,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Keyboard
} from 'react-native';

export default TextKeyboard = () => {

  const [name, SetName] = useState('');

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Please write your name :</Text>
      <TextInput style={styles.input}
        placeholder='your name'
        onChangeText={(value) => SetName(value)}
        // keyboardType='phone-pad'
        maxLength={5}
        editable={true}
        secureTextEntry
       />

       <Text style={styles.text}>Your name is {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignItems:'center',
  },
  text:{
    color: '#000000',
    fontSize: 25,
    margin: 10,
  },
  input: {
    width:200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius:10,
    textAlign: 'center',
    fontSize:20


  }



});

