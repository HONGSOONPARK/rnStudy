/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { useState, useEffect} from 'react';
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

import AsyncStorage from '@react-native-async-storage/async-storage'
import CustomButton from '../CustomComponents/CustomButton'

export default function LoginResult ({ navigation, route }) {

  const [name, setName] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = () =>{
    try {
      AsyncStorage.getItem('UserName').then(
        value => {
          if (value != null) {
            setName(value);
          }
        });
    }catch(error){
      console.log(error);
    }
    
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Welcom {name}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  body:{
    flex:1,
    alignItems:'center',
    
  },
  text:{
    color:'#000',
    fontSize:20,
    fontWeight:'bold',
    margin: 10,
  },
  textInput:{
    backgroundColor:'#d3d3d3',
    borderRadius:20,
    borderWidth:2,
    borderColor:'#000',
    width:300,
    height:50,
    fontSize:20,
    fontWeight:'bold',
    margin: 10,
    paddingStart:20,
  }

})