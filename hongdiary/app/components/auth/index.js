/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import AuthLogo from './authLogo';
import AuthForm from './authForm';


class AuthComponent extends Component {

  state = {
    loading: false,
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      )
    } else {
      return (
        <ScrollView style={styles.container}>
          <View>
            <AuthLogo />
            <AuthForm />
          </View>
        </ScrollView>
      )
    }
  }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  container: {
      flex: 1,
      backgroundColor: '#7487c5',
      padding: 130,

  }
});

export default AuthComponent;
