/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {useState} from 'react';
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

import styles from '../common/globalStyles';

export default Basic = ({navigation}) => {

  const [name, setName] = useState('Hong');
  const [session, setSession] = useState({number:6, title:'state'});
  const [current, setCurrent] = useState(true);

  // const [number, setNumber] = useState({number:0});
  const [count, setCount] = useState(0);

  const onClickHandler = () => {
    setName('go Home');
    setSession({number:5, title:'Style'});
    console.log({current});
    if(current){
      setCurrent(false);
    }else{
      setCurrent(true);
    }
  }

  const onClickCountHandler = () => {
    // setNumber({number: (number.number + 5)});
    setCount(count+1);
  }

  const onClickToggle = () => {
    // setNumber({number: (number.number + 5)});

    navigation.toggleDrawer();
    // navigation.openDrawer();
    // navigation.closeDrawer();
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is {name}</Text>
      <Text style={styles.text}>This is session number {session.number} and about {session.title}</Text>
      <Text style={styles.text}>{current ? 'current session' : 'next session'}</Text>
      <Button title='update name' onPress={onClickHandler}></Button>

      <Text style={styles.text}>Number: {count * 5}</Text>
      <Button title='Add Count' onPress={onClickCountHandler}></Button>
      <Text style={styles.text}>Click Count: {count}</Text>
      

      <Button title='Toggle Drawer' onPress={onClickToggle}></Button>
    </View>
  );
    
}

// <Button title='update name' onPress={() => {Linking.openURL('https://m.x1.co.kr')}}></Button>
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#0000fb', 
//   },
//   text: {
//     margin: 10,
//     color : '#ffffff',
//     fontSize : 21,
//     fontStyle : 'italic'
//   }

// });

