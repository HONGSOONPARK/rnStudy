// App.js
import React, { useEffect } from 'react';

// navigation 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Provider } from 'react-redux';
import { Store } from './src/redux/store'

import PushNotification from 'react-native-push-notification';


import {
  Button,
  Linking,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  GlobalStylesheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

// import MainScreen from './src/screen/Main';
import GlobalStyles from './src/common/globalStyles';
import BasicScreen from './src/screen/Basic';
import GlobalStylescreen from './src/screen/Style';
import StyleResponsiveScreen from './src/screen/StyleResponsive';
import ListScrollView from './src/screen/ListScrollView';
import FlatSectionList from './src/screen/FlatSectionList';
import FlatSectionList_Practice from './src/screen/FlatSectionList_Practice';
import TextKeyboard from './src/screen/TextKeyboard';
import ButtonTouchPress from './src/screen/ButtonTouchPress';
import AlertToast from './src/screen/AlertToast';
import ModalCustomAlert from './src/screen/ModalCustomAlert';
import ImageImageBackground from './src/screen/ImageImageBackground';
import CustomComponents from './src/screen/CustomComponents/CustomComponents';
import TabNavigator from './src/screen/TabNavigator';
import DrawerNavigation from './src/screen/DrawerNavigation';
import PassingData from './src/screen/PassingData/PassingData';
import LoginPage from './src/screen/LoginAsync/LoginPage';
import LoginResult from './src/screen/LoginAsync/LoginResult';
import LoginPageSl from './src/screen/LoginSqlite/LoginPageSl';
import LoginResultSl from './src/screen/LoginSqlite/LoginResultSl';
import LoginPageRedux from './src/screen/LoginRedux/LoginPageRedux';
import LoginResultRedux from './src/screen/LoginRedux/LoginResultRedux';
import FetchApiRedux from './src/screen/FetchApi/FetchApiRedux';



// import BasicScreen from './src/screen/Basic';
// #faa818    #41a30d    #ffce38 #367d7d    #d33502    #6ebcbc #37526d

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



function MainScreen({ navigation }) {

  const onPressHandler = (screen) => {
    navigation.navigate(screen);
    // navigation.replace(screen);
  }

  return (
    <ScrollView horizontal={false} style={GlobalStyles.mainScroll}>

      <Pressable style={GlobalStyles.button} onPress={() => onPressHandler('BASIC')}>
        <Text style={GlobalStyles.text} >Basic Screen</Text>
      </Pressable>
      <Pressable style={GlobalStyles.button} onPress={() => onPressHandler('STYLE_RESPONSIVE')}>
        <Text style={GlobalStyles.text} >Style Responsive Screen</Text>
      </Pressable>
      <Pressable style={GlobalStyles.button} onPress={() => onPressHandler('LIST_SCROLL_VIEW')}>
        <Text style={GlobalStyles.text} >List/Scroll Screen</Text>
      </Pressable>
      <Pressable style={GlobalStyles.button} onPress={() => onPressHandler('FlAT_SECTION_LIST')}>
        <Text style={GlobalStyles.text} >Flat/Section List Screen</Text>
      </Pressable>
      <Pressable style={GlobalStyles.button} onPress={() => onPressHandler('FlAT_SECTION_LIST_PRACTICE')}>
        <Text style={GlobalStyles.text} >Flat/Section List ::: Practice</Text>
      </Pressable>
      <Pressable style={GlobalStyles.button} onPress={() => onPressHandler('TEXT_KEYBOARD')}>
        <Text style={GlobalStyles.text} >TextInput/Keyboard</Text>
      </Pressable>
      <Pressable style={GlobalStyles.button} onPress={() => onPressHandler('BUTTON_TOUCH_PRESSABLE')}>
        <Text style={GlobalStyles.text} >Button/Touchables/Pressable</Text>
      </Pressable>
      <Pressable style={GlobalStyles.button} onPress={() => onPressHandler('ALERT_TOAST')}>
        <Text style={GlobalStyles.text} >Alert/Toast</Text>
      </Pressable>
      <Pressable style={GlobalStyles.button} onPress={() => onPressHandler('MODAL_CUSTOM_ALERT')}>
        <Text style={GlobalStyles.text} >MODAL_CUSTOM</Text>
      </Pressable>
      <Pressable style={GlobalStyles.button} onPress={() => onPressHandler('IMAGE_BACKGROUND')}>
        <Text style={GlobalStyles.text} >IMAGE/IMAGEBACKGROUND</Text>
      </Pressable>
      <Pressable style={GlobalStyles.button} onPress={() => onPressHandler('CUSTOM_COMPONENTS')}>
        <Text style={GlobalStyles.text} >COMPONENTS/PROPS</Text>
      </Pressable>
      <Pressable style={GlobalStyles.button} onPress={() => onPressHandler('TAB_NAVIGATOR')}>
        <Text style={GlobalStyles.text} >TAB NAVIGATOR</Text>
      </Pressable>
      <Pressable style={GlobalStyles.button} onPress={() => onPressHandler('DRAWER_NAVIGATION')}>
        <Text style={GlobalStyles.text} >DRAWER NAVIGATOR</Text>
      </Pressable>
      <Pressable style={GlobalStyles.button} onPress={() => onPressHandler('PASSING_DATA')}>
        <Text style={GlobalStyles.text} >PASSING DATA</Text>
      </Pressable>
      <Pressable style={GlobalStyles.button} onPress={() => onPressHandler('LOGIN_PAGE')}>
        <Text style={GlobalStyles.text} >LOGIN PAGE(ASYNC)</Text>
      </Pressable>
      <Pressable style={GlobalStyles.button} onPress={() => onPressHandler('LOGIN_PAGE_SQLITE')}>
        <Text style={GlobalStyles.text} >LOGIN PAGE(SQLITE)</Text>
      </Pressable>
      <Pressable style={GlobalStyles.button} onPress={() => onPressHandler('LOGIN_PAGE_REDUX')}>
        <Text style={GlobalStyles.text} >LOGIN PAGE(REDUX)</Text>
      </Pressable>
      <Pressable style={GlobalStyles.button} onPress={() => onPressHandler('FETCH_API_REDUX')}>
        <Text style={GlobalStyles.text} >FETCH DATA(REDUX)</Text>
      </Pressable>
    </ScrollView>
  );
}

function App() {

  
const createChannel = () => {
  console.log('create channel');
  PushNotification.createChannel(
    {
      channelId: 'test-channel',
      channelName: 'Test Channel'
    }
  )
}

useEffect(() => {
  createChannel();
}, []);

  return (
    <Provider store={Store}>
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
              title: '기본기능',
              header: () => null
            }} />
          <Stack.Screen name="STYLE" component={GlobalStylescreen}
            options={{
              title: '스타일'
            }} />
          <Stack.Screen name="STYLE_RESPONSIVE" component={StyleResponsiveScreen}
            options={{
              title: '스타일 반응형'
            }} />
          <Stack.Screen name="LIST_SCROLL_VIEW" component={ListScrollView}
            options={{
              title: '리스트/스크롤뷰'
            }} />
          <Stack.Screen name="FlAT_SECTION_LIST" component={FlatSectionList}
            options={{
              title: '플랫/섹션 리스트'
            }} />
          <Stack.Screen name="FlAT_SECTION_LIST_PRACTICE" component={FlatSectionList_Practice}
            options={{
              title: '플랫/섹션 연습문제'
            }} />

          <Stack.Screen name="TEXT_KEYBOARD" component={TextKeyboard}
            options={{
              title: '텍스트입력/키보드'
            }} />

          <Stack.Screen name="BUTTON_TOUCH_PRESSABLE" component={ButtonTouchPress}
            options={{
              title: '버튼/터치/프레스'
            }} />
          <Stack.Screen name="ALERT_TOAST" component={AlertToast}
            options={{
              title: '알럿/토스트'
            }} />

          <Stack.Screen name="MODAL_CUSTOM_ALERT" component={ModalCustomAlert}
            options={{
              title: '모덜/커스텀얼럿'
            }} />

          <Stack.Screen name="IMAGE_BACKGROUND" component={ImageImageBackground}
            options={{
              title: '이미지/백그라운드'
            }} />
          <Stack.Screen name="CUSTOM_COMPONENTS" component={CustomComponents}
            options={{
              title: '커스텀 컴포넌트'
            }} />

          <Stack.Screen name="TAB_NAVIGATOR" component={TabNavigator}
            options={{
              title: '커스텀 컴포넌트'
            }} />

          <Stack.Screen name="DRAWER_NAVIGATION" component={DrawerNavigation}
            options={{
              title: '드로어 네비게이션'
            }} />

          <Stack.Screen name="PASSING_DATA" component={PassingData}
            options={{
              title: '패씽데이타'
            }} />

          <Stack.Screen name="LOGIN_PAGE" component={LoginPage}
            options={{
              title: '로그인(Async)'
            }}
          />
          <Stack.Screen name="LOGIN_RESULT" component={LoginResult}
            options={{
              title: '로그인 성공(Async)'
            }} />

          <Stack.Screen name="LOGIN_PAGE_SQLITE" component={LoginPageSl}
            options={{
              title: '로그인(Sqlite)'
            }}
          />
          <Stack.Screen name="LOGIN_RESULT_SQLITE" component={LoginResultSl}
            options={{
              title: '로그인 성공(Sqlite)'
            }} />


          <Stack.Screen name="LOGIN_PAGE_REDUX" component={LoginPageRedux}
            options={{
              title: '로그인(Redux)'
            }}
          />
          <Stack.Screen name="LOGIN_RESULT_REDUX" component={LoginResultRedux}
            options={{
              title: '로그인 성공(Redux)'
            }} />

          <Stack.Screen name="FETCH_API_REDUX" component={FetchApiRedux}
            options={{
              title: 'FETCH API(Redux)'
            }} />

        </Stack.Navigator>

      </NavigationContainer>

    </Provider>
  );
}

export default App;