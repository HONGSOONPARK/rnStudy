/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {useState, Component } from 'react';
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

import { styles } from '../config/globalStyles';

export default class Main extends Component {
  render(){
    return (
      <View style={styles.container}>

        <View style={styles.button}>
          <Button onPress={ () => this.goScreen('BASIC')} title='Go Basic Screen' />
        </View>

        <View style={styles.button}>
          <Button onPress={ () => this.goScreen('STYLE')} title='Go Style Screen' />
        </View>

        <View style={styles.button}>
          <Button onPress={() => this.goScreen('STYLE_RESPONSIVE')} title='Go Style Responsive Screen' />
        </View>
      </View>
    );
  }

  goScreen(screen){
    this.props.navigation.navigate(screen);
  }

}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#0000fb', 
//   },
//   text: {
//     margin: 10,
//     color : '#ffffff',
//     fontSize : 20,
//   }
// });



