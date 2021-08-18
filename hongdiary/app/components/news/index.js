/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';


class NewsComponent extends Component {
  render() {
    return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>
            News Screen
          </Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({

});

export default NewsComponent;