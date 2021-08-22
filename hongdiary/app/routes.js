import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import SignIn from './components/auth';
import Diary from './components/diary';
import News from './components/news';

import DiaryDocu from './components/diary/dirayDocu';
import Logo from './utils/logo';


const MainScreenTab = createBottomTabNavigator();

const AuthStack = createStackNavigator();
const DiaryStack = createStackNavigator();
const NewsStack = createStackNavigator();

const headerConfig = {
    headerTitleAlign: 'center',
    headerTintColor: '#fff',
    headerStyle: {
        backgroundColor:'#30A9DE',
    },
    title: <Logo/>,
    headerTitleStyle: {
        flex: 1,
        textAlign: 'center'
    }
}


// 어떻게 설계
/*
    Stack Navigator
        - Stack Screen A

    Stack Navigator
        - Tab Navigator
            - Tab Screen B
            - Tab Screen C

*/

// #30A9DE #EFDC05 #E53A40 #090707

const isLoggedIn = false;

const DiaryStackComponent = () => {
    return (
        <DiaryStack.Navigator>
            <DiaryStack.Screen name="Diary" component={Diary} options={headerConfig}/>
            <DiaryStack.Screen name="DiaryDocu" component={DiaryDocu} options={headerConfig} />
        </DiaryStack.Navigator>
    )
}

const NewsStackComponent = () => {
    return (
        <NewsStack.Navigator>
            <NewsStack.Screen name="News" component={News} options={headerConfig} />
        </NewsStack.Navigator>
    )
}


const AppTabComponent = () => {
    return (
        <MainScreenTab.Navigator
        screenOptions={
            ({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }
  
              // You can return any component that you like here!
              return null;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
          })}
        
        >
            <MainScreenTab.Screen name="DiaryTab" component={DiaryStackComponent} />
            <MainScreenTab.Screen name="NewsTab" component={NewsStackComponent} />
        </MainScreenTab.Navigator>
    )
}


export const RootNavigator = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{headerShown:false}}
        >
            {isLoggedIn ? (
                <AuthStack.Screen name="Main" component={AppTabComponent} />
            ) : (
                <>
                <AuthStack.Screen name="SignIn" component={SignIn} />
                <AuthStack.Screen name="AppTabComponent" component={AppTabComponent} />
                </>
            )}
        </AuthStack.Navigator>
    )
}

