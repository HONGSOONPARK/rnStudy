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
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from 'react-native';


import es6Test from './reactBasic/Es6';

import PropsChild from './reactBasic/PropsChild';
import Header from './exam/component/header';
import Generator from './exam/component/generator';
import NumList from './exam/component/numList';
import Picker from './exam/component/picker';
import Modal from './exam/component/modal';


class App extends Component {

  state = {
    appName: 'my app',
    random: [36, 399],
    textInput: '',
    alphabet: ['a', 'b', 'c']
  }

  onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    this.setState(prevState => {
      return {
        random: [...prevState.random, randomNum]
      }
    })
  }

  onNumDelete = (position) => {
    const newArray = this.state.random.filter((num, index) => {
      return position != index;
    })

    this.setState({
      random: newArray
    })
  }

  onChangeInput = (event) => {
    this.setState({
      textInput: event
    })
  }

  onAddTextInput = () => {
    this.setState(prevState => {
      return {
        textInput: '',
        alphabet: [...prevState.alphabet, prevState.textInput]
      }
    })

  }

  render() {
    return (

      <View style={styles.mainView}>
        <Header name='app man' />
        <View style={styles.subView}>
          <Text style={styles.mText}>
            Hello world
          </Text>
        </View>
        <View style={styles.button}>
          <Generator title='button'
            add={this.onAddRandomNum}
          />
        </View>
        <View>
          <NumList
            num={this.state.random}
            delete={this.onNumDelete}
          />
        </View>

        <View style={styles.inputTest}>
          <TextInput
            value={this.state.textInput}
            onChangeText={this.onChangeInput}
            multiline={true}
            maxLength={100}
            autoCapitalize={'none'}
            editable={true}
            style={styles.input}
          />
        </View>


        <Modal/>


        <Button
          title="add text input"
          onPress={this.onAddTextInput}
        />

        <ScrollView style={{ width: '100%' }}>
          {
            this.state.alphabet.map((item, idx) => (
              <Text key={idx}>
                {item}
              </Text>

            ))
          }
     
        </ScrollView>

        <View style={styles.mainView}>
          <Picker/>
        </View>
          

      </View>

   
    )
  } 
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subView: {
    backgroundColor: 'yellow',
    margin: 10,
  },
  anotherSubView: {
    flex: 2,
    backgroundColor: 'yellow',
    width: '100%',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mText: {
    fontSize: 20,
  },
  button: {

  },

  inputTest: {
    width:'100%',

  },

  input: {
    backgroundColor: '#cecece',
    width: '100%',
    marginTop: 20,
    fontSize:20,
    padding:10,
  }

})


export default App;