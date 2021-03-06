import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import SignIn from './components/auth';
import Diary from './components/diary';
import News from './components/news';

import Loading from './components/auth/loading';

import DiaryDocu from './components/diary/dirayDocu';
import Logo from './utils/logo';


const MainScreenTab = createBottomTabNavigator();
const AuthStack = createStackNavigator();
const DiaryStack = createStackNavigator();
const NewsStack = createStackNavigator();


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const headerConfig = {
    headerTitleAlign: 'center',
    headerTintColor: '#fff',
    headerStyle: {
        backgroundColor: '#30A9DE',
    },
    title: <Logo />,
    headerTitleStyle: {
        flex: 1,
        textAlign: 'center'
    }
}

const headerConfig_ = {
    headerTitleAlign: 'center',
    headerTintColor: '#fff',
    headerStyle: {
        backgroundColor: '#30A9DE',
    },
    title: <Logo />,
    headerTitleStyle: {
        flex: 1,
        textAlign: 'center'
    },
    headerLeft: null,
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

const TabBarIcon = (focused, name, color) => {
    let iconName, iconSize;
    const icons = {
        DiaryTab: 'notebook-outline',
        NewsTab: 'newspaper-variant-outline',
    };

    if (focused) iconSize = 37;
    else iconSize = 32;

    return <Icon name={icons[name]} size={iconSize} color={color} />

}


const DiaryStackComponent = () => {
    return (
        <DiaryStack.Navigator>
            <DiaryStack.Screen name="Diary" component={Diary} options={headerConfig_} />
            <DiaryStack.Screen name="DiaryDocu" component={DiaryDocu} options={headerConfig} />
        </DiaryStack.Navigator>
    )
}

const NewsStackComponent = () => {
    return (
        <NewsStack.Navigator>
            <NewsStack.Screen name="News" component={News} options={headerConfig_} />
        </NewsStack.Navigator>
    )
}


const AppTabComponent = () => {
    return (
        <MainScreenTab.Navigator
            initialRouteName="DiaryTab"
            screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => (
                        TabBarIcon(focused, route.name, color)
                    ),
                    headerShown: false,
                    tabBarActiveTintColor: '#EFDC05',
                    // tabBarInactiveTintColor: '#EFDC05',
                    tabBarInactiveTintColor: '#E3d3d3',
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: '#30A9DE'
                    },

                    // aos에서만 동작, 키보드 사용 시 탭바 삭제
                    tabBarHideOnKeyboard: true,
                })
            }
        >
            <MainScreenTab.Screen name="DiaryTab" component={DiaryStackComponent} />
            <MainScreenTab.Screen name="NewsTab" component={NewsStackComponent} />
        </MainScreenTab.Navigator>
    )
}


export const RootNavigator = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <AuthStack.Screen name="Loading" component={Loading}/>
            <AuthStack.Screen name="SignIn" 
                component={SignIn}
                options={()=>({gestureEnabled: false})}
            />
            <AuthStack.Screen name="AppTabComponent" 
                component={AppTabComponent} 
                options={()=>({gestureEnabled: false})} 
        />
        </AuthStack.Navigator>
    )
}

