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

// import { styles } from '../config/globalStyles';

export default StyleResponsive = () => {

  return (
    <View style={styles.body} >
      <View style={styles.row}>
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

      <View style={styles.row}>
        <View style={styles.view4}>
          <Text style={styles.text}>4</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.view5}>
          <Text style={styles.text}>5</Text>
        </View>
      </View>

      
      <View style={styles.bottom_row}>
        <View style={styles.view6}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.view7}>
          <Text style={styles.text}>7</Text>
        </View>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({

  // #faa818    #41a30d    #ffce38 #367d7d    #d33502    #6ebcbc #37526d
  body: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    backgroundColor: '#9999ff',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottom_row: {
    flex:3,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  view1: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#37526d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view2: {
    flex:2,
    flexDirection: 'column',
    backgroundColor: '#ff00ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    flex:3,
    flexDirection: 'column',
    backgroundColor: '#faa818',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view4: {
    flex:1,
    backgroundColor: '#41a30d',
    alignItems: 'center',
    justifyContent: 'center'
  },

  view5: {
    flex:1,
    backgroundColor: '#ffce38',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view6: {
    flex:3,
    backgroundColor: '#367d7d',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view7: {
    flex:3,
    backgroundColor: '#d33502',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#000000',
    fontSize: 35,
    margin:5,
    fontStyle: 'italic',
  }
});

