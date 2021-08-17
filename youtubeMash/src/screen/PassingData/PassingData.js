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

import ScreenA from './ScreenA';
import ScreenB from './ScreenB';


import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default PassingData = () => {
  return (
    <Drawer.Navigator
      initialRouteName="ScreenA"
      drawerPosition="left"
      drawerType="front"
      edgeWidth={100}
      hideStatusBar={false}
      overlayColor='#ffff9999'
      drawerStyle={{
        backgroundColor: '#e6e6e6',
        width: 190
      }}
      screenOptions={{
        headerShown: true,
        swipeEnabled: true,
        gestureEnabled: true,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#0080ff'
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: 'bold'
        },
      }}

    >
      <Drawer.Screen
        name="ScreenA"
        component={ScreenA}
        options={{
          title: 'ScreenA Title'
        }}
      />

      <Drawer.Screen
        name="ScreenB"
        component={ScreenB}
        options={{
          title: 'ScreenB Title',
          drawerIcon: ({ focused }) => (
            <FontAwesome5
              name="baby"
              size={focused ? 50 : 20}
            />
          )
        }}
        initialParams={{ItemName : 'Item from Drawer', ItemId: 142 }}
      />
    </Drawer.Navigator>
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
});
