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
} from 'react-native';

// import { styles } from '../config/globalStyles';

export default ListScrollView = () => {
  
  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = ()=> {

     setRefreshing(true);
     setItems([...Items, {key:69, item:'item69'}]);
     setRefreshing(false);

  }

  const [Items, setItems] = useState([
    {key:1, item: 'item1'},
    {key:2, item: 'item2'},
    {key:3, item: 'item3'},
    {key:4, item: 'item4'},
    {key:44, item: 'item44'},
    {key:45, item: 'item45'},
    {key:34, item: 'item34'},
    {key:5, item: 'item5'},
    {key:6, item: 'item6'},
    {key:7, item: 'item7'},
    {key:8, item: 'item8'},
    {key:9, item: 'item9'},
  ]);


  return (
    <ScrollView horizontal={false} style={styles.body}
      refreshControl={
        <RefreshControl
          refreshing= {Refreshing}
          onRefresh = {onRefresh}
          colors={['#ff00ff']}
        />
      }
    >
      {
        Items.map((object) => {
          return (
            <View style={styles.item} key={object.key}>
              <Text style={styles.text}>{object.item}</Text>
            </View>
          );
        })
      }
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  body:{
    flex:1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  item: {
    borderWidth:1,
    backgroundColor: '#5ab9fa',
    justifyContent: 'center',
    alignItems:'center',
    margin: 10,
  },
  text:{
    color: '#000000',
    fontSize: 35,
    fontStyle: 'italic',
    margin: 10,
  }

});

