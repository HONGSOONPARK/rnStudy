/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

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

AppRegistry.registerComponent(appName, () => App);
