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
  Alert,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../CustomComponents/CustomButton';

import { useSelector, useDispatch } from 'react-redux';
import { setName, setAge, increaseAge } from '../../redux/actions';

import SQLite from 'react-native-sqlite-storage'

const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    location: 'default',
  },
  () => { },
  error => { console.log(error) }
);

export default function LoginResultRedux({ navigation, route }) {

  // const [name, setName] = useState('');
  // const [age, setAge] = useState('');

  const { name, age } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      // AsyncStorage.getItem('UserData').then(
      //     value => {
      //       if (value != null) {
      //         let user = JSON.parse(value);
      //         setName(user.Name);
      //         setAge(user.Age);
      //       }
      //     });

      db.transaction((tx) => {
        tx.executeSql(
          "SELECT Name, Age FROM Users",
          [],
          (tx, results) => {
            var len = results.rows.length;
            if (len > 0) {
              var userName = results.rows.item(0).Name;
              var userAge = results.rows.item(0).Age;
              dispatch(setName(userName));
              dispatch(setAge(userAge));
            }
          }
        )
      });

    } catch (error) {
      console.log(error);
    }

  }

  const updateData = async () => {
    if (name.length == 0) {
      Alert.alert('Warning', 'Please write your name');
    } else {
      try {
        var user = {
          Name: name
        }
        // await AsyncStorage.mergeItem('UserData', JSON.stringify(user));

        dispatch(setName(name));
      
        db.transaction((tx) => {
          tx.executeSql(
            "UPDATE Users SET Name = ?",
            [name],
            () => {
              Alert.alert('Success!!', 'has been updated.');
            },
            error => { console.log(error) }
          )
        });



      } catch (error) {
        console.log(error);
      }

    }
  }

  const removeData = async () => {
    try {
      // await AsyncStorage.removeItem('UserName');
      // await AsyncStorage.clear();

      db.transaction((tx) => {
        tx.executeSql(
          "DELETE FROM Users",
          [],
          () => {

            dispatch(setName(''));
            dispatch(setAge(''));
            navigation.navigate('LOGIN_PAGE_REDUX');
          },
          error => { console.log(error) }
        )
      })


    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Welcom {name}</Text>
      <Text style={styles.text}>Your Age {age}</Text>

      <TextInput style={styles.textInput}
        placeholder='your name'
        value={name}
        onChangeText={(value) => dispatch(setName(value))}
      />


      <CustomButton
        title='Update'
        color='#1eb900'
        onPressFunction={updateData}
      />

      <CustomButton
        title='Remove'
        color='#FF1212'
        onPressFunction={removeData}
      />

      <CustomButton
        title='Increase Age'
        color='#0087ff'
        onPressFunction={() => { dispatch(increaseAge())} }
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