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
  Keyboard,
  TouchableOpacity,
  Pressable,
  Alert,
  ToastAndroid,
  Modal
} from 'react-native';

import BasicScreen from './Basic';
import StyleScreen from './Style';



import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default TabNavigator = () => {
  return (
      <Tab.Navigator
        // screenOptions{({ route}) => ({

        //   tabBarIcon: ({focused, size, color}) => {
        //     let iconName;
        //     if(route.name ==='Main'){
        //         iconName = 
        //     }else if(route.name === 'Style'){

        //     }

        //   }
        // })}
        >
        <Tab.Screen
          name="Main"
          component={BasicScreen}/>
        <Tab.Screen
          name="Style"
          component={StyleScreen}
        />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#000000',
    fontSize: 70,
    margin: 10,
  },


});

