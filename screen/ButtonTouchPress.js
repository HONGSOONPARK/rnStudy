/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { useState } from 'react';
import {
  Button,
  Linking,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Keyboard,
  TouchableOpacity,
  Pressable
} from 'react-native';

export default ButtonTouchPress = () => {

  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const onPressHandler = () => {
    if(name.length > 3){
      setSubmitted(!submitted)
      submitted ? setName('') : null;
    }
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Please write your name :</Text>
      <TextInput style={styles.input}
        placeholder='your name'
        onChangeText={(value) => setName(value)}
        // keyboardType='phone-pad'
        maxLength={5}
        editable={true}
        secureTextEntry
        value={name}
      />

      <Button
        title={submitted ? 'Clear' : 'Submit'}
        onPress={onPressHandler}
        // disabled={submitted}
        color='#ff9900'
      />

      <TouchableOpacity
        style={styles.button}
        onPress={onPressHandler}
        activeOpacity={0.5}
      >
        <Text>{submitted ? 'Clear' : 'Submit'}</Text>

      </TouchableOpacity>

      <Pressable
        style={({pressed})=>[
          {backgroundColor: pressed? '#00ff': '#00ff00'},
          styles.button
        ]}

        // 버튼 주변 클릭 가능
        hitSlop= {{top: 10, bottom: 10, right: 10, left: 10}}
        onPress={onPressHandler}
        android_ripple={{color:'#00f'}}
      >
        <Text>{submitted ? 'Clear' : 'Submit'}</Text>
      </Pressable>

      {submitted ?
        <Text style={styles.text}>Your name is {name}</Text>
        : 
        null
      }

    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 25,
    margin: 10,
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20
  },
  button:{ 
    width:100,
    height:50,
    alignItems: 'center',
    justifyContent: 'center',
    padding:1,
    margin:5

  }



});

