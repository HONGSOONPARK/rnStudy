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
import AlertScreen from './AlertToast';
import StyleScreen from './Style';
import ModalCustomScreen from './ModalCustomAlert';


import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Basic"
      drawerPosition="left"
      drawerType="front"
      edgeWidth={100}
      hideStatusBar={false}
      overlayColor='#ffff9999'
      drawerStyle={{
        backgroundColor:'#e6e6e6',
        width:190
      }}
      screenOptions={{
        headerShown: true,
        swipeEnabled: true,
        gestureEnabled: true,
        headerTitleAlign: 'center',
        headerStyle :{
          backgroundColor: '#0080ff'
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontSize:25,
          fontWeight: 'bold'
        },
      }}
      
    >
      <Drawer.Screen
        name="Basic"
        component={BasicScreen}
        options={{
          title:'Basic Title'
        }}
      />

      <Drawer.Screen
        name="Style"
        component={StyleScreen}
        options={{
          title:'Style Title',
          drawerIcon: ({focused}) => (
            <FontAwesome5
              name="baby"
              size={focused ? 50 : 20}
            />
          )
        }}
      />
    </Drawer.Navigator>
  );


//   import BasicScreen from './Basic';
// import AlertScreen from './AlertToast';
// import StyleScreen from './Style';
// import ModalCustomScreen from './ModalCustomAlert';
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

