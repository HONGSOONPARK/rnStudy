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
  FlatList,
  TouchableOpacity
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../CustomComponents/CustomButton';

import { useSelector, useDispatch } from 'react-redux';
import { setName, setAge, increaseAge, getCities } from '../../redux/actions';

import SQLite from 'react-native-sqlite-storage';
import { color } from 'react-native-reanimated';

import PushNotification from "react-native-push-notification";

export default function FetchApiRedux({ navigation, route }) {

  const { name, age, cities } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  // const createChannel = () => {
  //   console.log('create channel');

  //   PushNotification.createChannel(
  //     {
  //       channelId: 'test-channel',
  //       channelName: 'Test Channel'
  //     }
  //   )
  // }

  useEffect(() => {
    dispatch(getCities());
    // createChannel();
  }, []);

  const handleNotification = (item, index) => {
    // console.log(item);

    PushNotification.cancelAllLocalNotifications();
    // PushNotification.cancelAllLocalNotifications({
    //   id:3
    // });

    PushNotification.localNotification({
      channelId: 'test-channel',
      title: 'title ',
      message: item.earning_late.toString(),
      bigText: item.earning_late.toString() + '야라라라랄',
      color: "red",
      id: index
    });

    if(index == 2){
      PushNotification.localNotificationSchedule({
        channelId: 'test-channel',
        title: 'Alarm ',
        message: item.earning_late.toString() + "click 20초 전",
        date: new Date(Date.now() + 20 * 1000),
        allowWhileIdle: true,
      });
    }
 

  }


  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Fetch Data Call API, Redux
      </Text>

      <CustomButton 
        color='#ff0d93'
        title='Camera'
        onPressFunction={() => { navigation.navigate('CAMERA')}}
      />

      <FlatList
        data={cities}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => { 
              handleNotification(item, index);
              navigation.navigate('MAP_SCREEN', {
                title : item.seq.toString(),
              });
            
            }}
          >
            <View style={styles.item}>
              <Text style={styles.title}>{item.seq}</Text>
              <Text style={styles.subtitle}>{item.earning_late}</Text>
            </View>
          </TouchableOpacity>
        )}

        keyExtractor={(item, index) => index.toString()}
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
  },

  item: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#cccccc',
    borderRadius: 5,
    margin: 7,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    fontSize: 30,
    margin: 10,

  },
  subtitle: {
    fontSize: 20,
    margin: 10,
    color: '#999999'
  },


})