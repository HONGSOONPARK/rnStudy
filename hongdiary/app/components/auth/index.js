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

// #30A9DE #EFDC05 #E53A40 #090707

class AuthComponent extends Component {

  state = {
    loading: false,
  }

  goWithOutLogin = () => {
    this.props.navigation.navigate("AppTabComponent")

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
            <AuthForm
              goWithOutLogin={this.goWithOutLogin}
            />
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
      backgroundColor: '#30A9DE',
      padding: 130,
      paddingLeft: 50,
      paddingRight: 50,

  }
});

export default AuthComponent;
