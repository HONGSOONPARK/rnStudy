// App.js
import * as React from 'react';

// navigation 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


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

// import MainScreen from './screen/Main';
import BasicScreen from './screen/Basic';
import StyleScreen from './screen/Style';
import StyleResponsiveScreen from './screen/StyleResponsive';
import ListScrollView from './screen/ListScrollView';
import FlatSectionList from './screen/FlatSectionList';
import FlatSectionList_Practice from './screen/FlatSectionList_Practice';
import TextKeyboard from './screen/TextKeyboard';
import ButtonTouchPress from './screen/ButtonTouchPress';
import AlertToast from './screen/AlertToast';
import ModalCustomAlert from './screen/ModalCustomAlert';
import ImageImageBackground from './screen/ImageImageBackground';
import CustomComponents from './screen/CustomComponents/CustomComponents';
import TabNavigator from './screen/TabNavigator';

import { styles } from './config/globalStyles';


// import BasicScreen from './screen/Basic';
// #faa818    #41a30d    #ffce38 #367d7d    #d33502    #6ebcbc #37526d

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainScreen({ navigation }) {

  const onPressHandler = (screen) => {
    navigation.navigate(screen);
    // navigation.replace(screen);
  }

  return (
    <ScrollView horizontal={false} style={styles.mainScroll}>
      <View style={styles.button}>
        <Button onPress={() => onPressHandler('BASIC')} title='Basic Screen' />
      </View>
      <View style={styles.button}>
        <Button onPress={() => onPressHandler('STYLE')} title='Style Screen' />
      </View>
      <View style={styles.button}>
        <Button onPress={() => onPressHandler('STYLE_RESPONSIVE')} title='Style Responsive Screen' />
      </View>
      <View style={styles.button}>
        <Button onPress={() => onPressHandler('LIST_SCROLL_VIEW')} title='List/Scroll Screen' />
      </View>
      <View style={styles.button}>
        <Button onPress={() => onPressHandler('FlAT_SECTION_LIST')} title='Flat/Section List Screen' />
      </View>
      <View style={styles.button}>
        <Button onPress={() => onPressHandler('FlAT_SECTION_LIST_PRACTICE')} title='Flat/Section List ::: Practice' />
      </View>
      <View style={styles.button}>
        <Button onPress={() => onPressHandler('TEXT_KEYBOARD')} title='TextInput/Keyboard' />
      </View>
      <View style={styles.button}>
        <Button onPress={() => onPressHandler('BUTTON_TOUCH_PRESSABLE')} title='Button/Touchables/Pressable' />
      </View>
      <View style={styles.button}>
        <Button onPress={() => onPressHandler('ALERT_TOAST')} title='Alert/Toast' />
      </View>
      <View style={styles.button}>
        <Button onPress={() => onPressHandler('MODAL_CUSTOM_ALERT')} title='MODAL_CUSTOM' />
      </View>
      <View style={styles.button}>
        <Button onPress={() => onPressHandler('IMAGE_BACKGROUND')} title='IMAGE/IMAGEBACKGROUND' />
      </View>
      <View style={styles.button}>
        <Button onPress={() => onPressHandler('CUSTOM_COMPONENTS')} title='COMPONENTS/PROPS' />
      </View>
      <View style={styles.button}>
        <Button onPress={() => onPressHandler('TAB_NAVIGATOR')} title='TAB NAVIGATOR' />
      </View>
    </ScrollView>
  );
}


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
            title: '기본기능',
            header: () => null
          }} />
        <Stack.Screen name="STYLE" component={StyleScreen}
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


      </Stack.Navigator>



    </NavigationContainer>


  );
}

export default App;