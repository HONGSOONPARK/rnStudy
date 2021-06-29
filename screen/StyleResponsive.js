/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { useState } from 'react';
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

export default StyleResponsive = () => {

  return (
    <View style={styles.body} >
      <View style={styles.view1}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text}>2</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text}>3</Text>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  body: {
    // width: 400,
    // height: 400,
    flexDirection: 'row',
    flex:1,
    backgroundColor: '#9999ff',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  view1: {
    width: 100,
    height: 100,
    // flex:1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view2: {
    width: 100,
    height: 100,
    // flex: 1,
    backgroundColor: '#ff00ff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view3: {
    width: 100,
    height: 100,
    // flex: 1,
    backgroundColor: '#00ff92',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#000000',
    fontSize: 25,
    fontStyle: 'italic',
  }
});

