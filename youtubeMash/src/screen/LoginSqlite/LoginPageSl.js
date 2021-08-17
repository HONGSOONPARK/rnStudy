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

import LoginResultSl from './LoginResultSl'
import AsyncStorage from '@react-native-async-storage/async-storage'
import CustomButton from '../CustomComponents/CustomButton'

import SQLite from 'react-native-sqlite-storage'

const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    location: 'default',
  },
  () => { },
  error => { console.log(error) }
);


export default function LoginPageSl({ navigation }) {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    createTable
    getDate();
  }, []);

  const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS "
        + "Users "
        + "(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);"

      );
    })
  }

  const getDate = () => {
    try {
      // AsyncStorage.getItem('UserData').then(value => {
      //   if(value != null){
      //     navigation.navigate('LOGIN_RESULT');
      //   }
      // });
      db.transaction((tx) => {
        tx.executeSql(
          "SELECT Name, Age FROM Users",
          [],
          (tx, results) => {
            var len = results.rows.length;
            if (len > 0) {
              navigation.navigate('LOGIN_RESULT_SQLITE');
            }
          }
        )
      });

    } catch (error) {
      console.log(error);
    }
  }

  const setData = async () => {
    if (name.length == 0 || age.length == 0) {
      Alert.alert('Warning', 'Please write your name & age');
    } else {

      try {
        await db.transaction(async (tx) => {
          // await tx.executeSql(
          //   "INSERT INTO Users (Name, Age) VALUES ('"+name+"','"+age+"');"
          // )
          await tx.executeSql(
            "INSERT INTO Users (Name, Age) VALUES (?,?)",
            [name, age]
          );
        })

        // await AsyncStorage.setItem('UserData', JSON.stringify(user));
        // await AsyncStorage.setItem('UserName', name);
        navigation.navigate('LOGIN_RESULT_SQLITE');

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