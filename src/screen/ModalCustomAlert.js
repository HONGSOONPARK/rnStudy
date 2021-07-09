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
  Modal
} from 'react-native';

export default ModalCustomAlert = () => {

  const [name, setName] = useState('')
  const [showWarning, setShowWarning] = useState(false)

  const onPressHandler = () => {
    setShowWarning(true)
  }

  return (
    <View style={styles.body}>
      <Modal
        visible={showWarning}
        transparent
        onRequestClose={() => setShowWarning(false)}
        animationType='fade'
        hardwareAccelerated
      >

        <View style={styles.center_view}>
          <View style={styles.warn_modal}>
            <View style={styles.warn_title}>
              <Text style={styles.modal_header_text}>경고! 나는 모달!뚜껑</Text>
            </View>
            <View style={styles.warn_body}>
              <Text style={styles.modal_content_text}>
                모달 테스트
              </Text>
            </View>
            <Pressable style={styles.warn_bottom} onPress={() => setShowWarning(false)} android_ripple={{ color: '#ff1021' }}>
              <Text style={styles.modal_content_text}>
                닫기
                </Text>
            </Pressable>
          </View>
        </View>


      </Modal>

      <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? '#00ff' : '#00ff00' },
          styles.button
        ]}
        // 버튼 주변 클릭 가능
        onPress={onPressHandler}
        android_ripple={{ color: '#00f' }}
      >
        <Text style={styles.text}>Submit</Text>
      </Pressable>


    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#000000',
    fontSize: 70,
    margin: 10,
  },
  button: {
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
    margin: 5,
  },
  center_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099'
  },
  warn_modal: {
    width: 350,
    height: 350,
    backgroundColor: '#ee9999',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 20,
  },

  warn_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },

  warn_body: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },

  warn_bottom :{
    backgroundColor:'#00ffff',
    height:50,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent:'center',
    alignItems:'center',
  },

  modal_header_text: {
    color: '#000000',
    fontSize: 25,
    margin: 5,
  },

  modal_content_text: {
    color: '#000000',
    fontSize: 20,
    margin: 5,
  }

  


});

