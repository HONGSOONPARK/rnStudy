// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {
  Button,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import MainScreen from './screen/Main';
import BasicScreen from './screen/Basic';
import StyleScreen from './screen/Style';
import StyleResponsiveScreen from './screen/StyleResponsive';


// import BasicScreen from './screen/Basic';
// #faa818    #41a30d    #ffce38 #367d7d    #d33502    #6ebcbc #37526d

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MAIN"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#d33502',
            height: 50,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#ffffff',
            fontSize: 30,
          },
          headerTitleAlign: 'center',
        }}
      >

        <Stack.Screen name="MAIN" component={MainScreen}
          options={{
            title: '메인화면'
          }} />
        <Stack.Screen name="BASIC" component={BasicScreen}
          options={{
            title: '기본기능'
          }} />
        <Stack.Screen name="STYLE" component={StyleScreen}
          options={{
            title: '스타일'
          }} />
        <Stack.Screen name="STYLE_RESPONSIVE" component={StyleResponsiveScreen}
          options={{
            title: '스타일 연습'
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;