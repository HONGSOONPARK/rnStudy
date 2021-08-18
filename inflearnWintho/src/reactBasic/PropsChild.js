/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow strict-local
*/

import React, { Component } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


const PropsChild = (props) => {
  return (
    <View>
      <Text onPress={props.cState}>
        {props.sText}
      </Text>
    </View>
  )
}

export default PropsChild;