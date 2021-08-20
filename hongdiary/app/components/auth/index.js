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
import { getTokens, setTokens } from '../../utils/misc';
import { autoSignIn } from '../../store/actions/user_actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// #30A9DE #EFDC05 #E53A40 #090707

class AuthComponent extends Component {

  state = {
    loading: false,
  }

  goWithOutLogin = () => {
    this.props.navigation.navigate("AppTabComponent")
  }

  componentDidMount() {
    // value...
    // ['@hongdiary@userId', 'asdasd...']   -> [0][1]
    // ['@hongdiary@token', 'asddasd....']  -> [1][1]
    // ['@hongdiary@refToken', 'asdsabcb...'] -> [2][1]

    getTokens((value)=>{
      if(value[1][1] === null ){
        this.setState({loading:false })
      }else {
        this.props.autoSignIn(value[2][1]).then(()=>{
          if(!this.props.User.auth.token) {
            this.setState({loading:false})
          }else {
            setTokens(this.props.User.auth, ()=>{
              this.goWithOutLogin();
            })
          }
        })
      }
      console.log("Get Token :", value);
    });
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

function mapStateToProps(state){
  return {
    User: state.User
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({autoSignIn}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthComponent);
