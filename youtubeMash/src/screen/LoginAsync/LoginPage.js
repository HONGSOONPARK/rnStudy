/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { useState, useEffect } from 'react';
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
  Keyboard,
  Alert
} from 'react-native';

import LoginResult from './LoginResult'

import AsyncStorage from '@react-native-async-storage/async-storage'

import CustomButton from '../CustomComponents/CustomButton'

export default function LoginPage({ navigation }) {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    getDate();
  }, []);

  const getDate = () => {
    try {
      // AsyncStorage.getItem('UserName').then(value => {
      //     if(value != null){
      //       navigation.navigate('LOGIN_RESULT');
      //     }
      // })
      AsyncStorage.getItem('UserData').then(value => {
        if (value != null) {
          navigation.navigate('LOGIN_RESULT');
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  // 24번 강의 11분 46부터 시작
  const setData = async () => {
    if (name.length == 0 || age.length == 0) {
      Alert.alert('Warning', 'Please write your name & age');
    } else {

      try {
        var user = {
          Name: name,
          Age: age
        }

        await AsyncStorage.setItem('UserData', JSON.stringify(user));
        // await AsyncStorage.setItem('UserName', name);
        navigation.navigate('LOGIN_RESULT');

      } catch (error) {
        console.log(error);
      }

    }
  }


  return (
    <View style={styles.body}>
      <Text style={styles.text}>Async Storage</Text>

      <TextInput style={styles.textInput}
        placeholder='Name'
        onChangeText={(value) => setName(value)}
      />
      <TextInput style={styles.textInput}
        placeholder='Age'
        onChangeText={(value) => setAge(value)}
      />

      <CustomButton
        title='Login'
        color='#1eb900'
        onPressFunction={setData}
      />

    </View>
  );
}


const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',

  },
  text: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  textInput: {
    backgroundColor: '#d3d3d3',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#000',
    width: 300,
    height: 50,
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    paddingStart: 20,
  }

})