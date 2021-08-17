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
  Pressable,
  Alert,
  ToastAndroid,
  Modal,
  Image,
  ImageBackground,
} from 'react-native';



const image = { uri: "https://reactjs.org/logo-og.png" };

export default ImageImageBackground = () => {

  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const onPressHandler = () => {

    if (name.length > 3) {
      setSubmitted(!submitted)
      submitted ? setName('') : null;
    } else {
      // Alert.alert('Warning', 'longer than 3 characters',
      //   // destructive -> ios 만 적용
      //   [
      //     { text: 'DO NOT SHOW AGAIN', onPress: () => console.warn('DO NOT SHOW AGAIN'), style: 'destructive' },
      //     { text: 'CANCEL', onPress: () => console.warn('CANCEL') },
      //     { text: 'OK', onPress: () => console.warn('OK') }
      //   ], { cancelable: true, onDismiss: () => console.warn('Alert dismissed!') }
      // )

      ToastAndroid.showWithGravityAndOffset(
        'longer than 3 characters',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
        100,
        200
      )
    }

  

  }

  return (
    <ImageBackground style={styles.body}
      source={{uri:'https://reactjs.org/logo-og.png'}}
      resizeMode='stretch'
    >


      <Text style={styles.text}>Please write your name :</Text>
      <TextInput style={styles.input}
        placeholder='your name'
        placeholderTextColor='#fff999'
        onChangeText={(value) => setName(value)}
        // keyboardType='phone-pad'
        maxLength={5}
        editable={true}
        secureTextEntry
        value={name}
      />

      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? '#00ff' : '#00ff00' },
          styles.button
        ]}

        // 버튼 주변 클릭 가능
        hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
        onPress={onPressHandler}
        android_ripple={{ color: '#00f' }}
      >
        <Text>{submitted ? 'Clear' : 'Submit'}</Text>
      </Pressable>

      {submitted ?
        <View style={styles.body}>
        <Text style={styles.text}>Your name is {name}</Text>
        <Image style={styles.image} resizeMode='stretch' source={require('../assets/done.png')}/>
        </View>
        :
        <View style={styles.body}>
          <Image style={styles.image} resizeMode='stretch' source={require('../assets/error.png')}/>
          <Image style={styles.image} resizeMode='stretch' source={{uri:'http://file3.instiz.net/data/cached_img/upload/2020/06/19/20/61b0250710322956b2077bd945d04913.jpg'}}/>
        </View>


      }
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    color: '#ffff99',
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
  button: {
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
    margin: 5
  },
  image: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
    margin: 5
  }


});

