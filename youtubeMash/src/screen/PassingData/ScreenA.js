import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
} from 'react-native';

export default function ScreenA({ navigation, route }) {

  const Users = [
    {
      id:1,
      name: 'User A',
    },
    {
      id:2,
      name: 'User B',
    },
    {
      id:3,
      name: 'User C',
    }
  ]

  const [name, setName] = useState('');

  const onPressHandler = () => {
    // navigation.navigate('ScreenB', {ItemName : 'Item from Screen A', ItemId: 12 });
    // navigation.toggleDrawer();
    
    // navigation.navigate('ScreenB');
    for(let user of Users){
      setName(user.name);
    }


  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Screen A
        </Text>
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
      >
        <Text style={styles.text}>
          Toggle Drawer
        </Text>
      </Pressable>
      {
        // <Text style={styles.text}>{route.params?.Message}</Text>
      }

      <Text style={styles.text}>{name}</Text>


    </View>
    
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    // fontFamily: 'Yomogi-Regular',
    margin: 10,
  }
})