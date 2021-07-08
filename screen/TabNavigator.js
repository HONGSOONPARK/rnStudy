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


import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


// const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();
// top tab이 안됨..npm 문제로 추정 추후에 다시 확인

export default TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === 'Main') {
            iconName = 'angry';
            size = focused? 30 : 25;
            // color= focused? '#f0f999' : '#555';
          } else if (route.name === 'Style') {
            iconName = 'baby';
            size = focused? 30 : 25;
            // color= focused? '#f0f999' : '#555';
          }
          return (
            <FontAwesome5
              name={iconName}
              size={size}
              color={color}
              />
          )
        }
      })}

      tabBarOptions={{
        activeTintColor: '#f0f',
        inactiveTintColor: '#555',
        activeBackgroundColor: '#fff',
        inactiveBackgroundColor:'#999',
        showLabel: true,
        labelStyle: {fontSize: 14},
      }}
      activeColor='#f0edd7'
      inactiveColor='#3e2465'
      barStyle={{backgroundColor:'#694fad'}}
    >
        <Tab.Screen
          name="Main"
          component={BasicScreen}
          options={{tabBarBadge: 999+"+"}}
          />
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

