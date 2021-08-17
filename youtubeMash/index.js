/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

// import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";

import App from './App';
// import ImageScene from './ImageScene';
// import BlinkScene from './BlinkScene';
// import IndexScene from './IndexScene';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => ImageScene);
// AppRegistry.registerComponent(appName, () => BlinkScene);

// export const NavApp = StackNavigator({
//     Index: {screen: IndexScene},
// });


PushNotification.configure({
  
  onNotification: function (notification) {
      console.log("NOTIFICATION:"+notification);
  },
  requestPermissions: Platform.OS === 'ios'
});

AppRegistry.registerComponent(appName, () => App);
