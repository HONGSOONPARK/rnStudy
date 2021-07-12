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
  const [age, setAge] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = () =>{
    try {
      // AsyncStorage.getItem('UserName').then(
      //   value => {
      //     if (value != null) {
      //       setName(value);
      //     }
      //   });
      AsyncStorage.getItem('UserData').then(
          value => {
            if (value != null) {
              let user = JSON.parse(value);
              setName(user.Name);
              setAge(user.Age);
            }
          });
    }catch(error){
      console.log(error);
    }
    
  }

  const updateData = async () => {
    if(name.length == 0){
      Alert.alert('Warning', 'Please write your name');
    }else{

      try {

        var user ={
          Name : name
        }
        await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
        // await AsyncStorage.setItem('UserName', name);
        // navigation.navigate('LOGIN_RESULT');
        Alert.alert('Success!!', 'has been updated.');
        
      } catch (error) {
        console.log(error);
      }

    }
  }

  const removeData = async () =>{
    try {
      // await AsyncStorage.removeItem('UserName');
      await AsyncStorage.clear();

      navigation.navigate('LOGIN_PAGE');
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
      onChangeText={(value) => setName(value) }
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