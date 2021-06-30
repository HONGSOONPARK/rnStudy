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
      <ScrollView horizontal={false} style={styles.mainScroll}>
        <View style={styles.button}>
          <Button onPress={ () => this.goScreen('BASIC')} title='Basic Screen' />
        </View>
        <View style={styles.button}>
          <Button onPress={ () => this.goScreen('STYLE')} title='Style Screen' />
        </View>
        <View style={styles.button}>
          <Button onPress={() => this.goScreen('STYLE_RESPONSIVE')} title='Style Responsive Screen' />
        </View>
        <View style={styles.button}>
          <Button onPress={() => this.goScreen('LIST_SCROLL_VIEW')} title='List/Scroll Screen' />
        </View>
        <View style={styles.button}>
          <Button onPress={() => this.goScreen('FlAT_SECTION_LIST')} title='Flat/Section List Screen' />
        </View>
        <View style={styles.button}>
          <Button onPress={() => this.goScreen('FlAT_SECTION_LIST_PRACTICE')} title='Flat/Section List Practice' />
        </View>
      </ScrollView>
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



