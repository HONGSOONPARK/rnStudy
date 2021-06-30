/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { useState } from 'react';
import {
  Button,
  FlatList,
  Linking,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
// import { styles } from '../config/globalStyles';

export default FlatSectionList = () => {
  
  const [Refreshing, setRefreshing] = useState(false);

  const onRefresh = ()=> {

     setRefreshing(true);
     setItems([...Items, {name:'item69'}]);
     setRefreshing(false);

  }

  // flatlist 는 key를  string으로만 받음
  const [Items, setItems] = useState([
    // {key:'1', name: 'item1'},
    // {key:'2', name: 'item2'},
    // {key:'3', name: 'item3'},
    // {key:'4', name: 'item4'},
    // {key:'5', name: 'item5'},
    // {key:'6', name: 'item6'},
    // {key:'7', name: 'item7'},
    // {key:'8', name: 'item8'},
    // {key:'9', name: 'item9'},
    {name: 'item1'},
    {name: 'item2'},
    {name: 'item3'},
    {name: 'item4'},
    {name: 'item5'},
    {name: 'item6'},
    {name: 'item7'},
    {name: 'item8'},
    {name: 'item9'},
  ]);

  const DATA = [
    {
      title: 'title 1',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3', 'Item 1-4', 'Item 1-5', 'Item 1-6']
    },
    {
      title: 'title 2',
      data: ['Item 2-1', 'Item 2-2']
    },
    {
      title: 'title 3',
      data: ['Item 3-1', 'Item 3-2', 'Item 3-3', 'Item 3-4']
    },
    {
      title: 'title 4',
      data: ['Item 4-1', 'Item 4-2', 'Item 4-3', 'Item 4-4', 'Item 4-5', 'Item 4-6', 'Item 4-7']
    }, 
    {
      title: 'title 5',
      data: ['Item 5-1', 'Item 5-2', 'Item 5-3']
    }


  ];


  return (
      <SectionList
      sections={DATA}
      keyExtractor={(item, index) => index.toString()}
      renderSectionHeader={({section}) => 
        <Text style={styles.header}>{section.title}</Text>
      }
      renderItem={({item})=> (
        <View style={styles.item}>
          <Text style={styles.text}>{item}</Text>
        </View>
      )}
      />

      // <FlatList
      // // horizontal
      // // inverted
      // numColumns={1}
      // // index를 key로 사용

      // refreshControl={
      //   <RefreshControl
      //     refreshing={Refreshing}
      //     onRefresh={onRefresh}
      //     color={['#dd9900']}
      //   />
      // }

      // keyExtractor={(item, index)=> index.toString()}
      //   data={Items}
      //   renderItem={ ({item}) => (
      //     <View style={styles.item}>
      //       <Text style={styles.text}>{item.name}</Text>
      //     </View>
      //   )}
      // >
      // </FlatList>
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
    fontSize: 15,
    fontStyle: 'italic',
    margin: 3,
  },
  header:{
    textAlign:'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAED7D',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#f03300',
  },

});

