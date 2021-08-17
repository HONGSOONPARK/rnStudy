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

export default FlatSectionListPractice = () => {

  const [Refreshing, setRefreshing] = useState(false);


  const onRefresh = () => {
    setRefreshing(true);
    const number = Items.length + 1;
    setItems([...Items, {
      title: `title ` + number,
      data: [`Item ` + number + `-1`, `Item ` + number + `-2`]
    }]);
    setRefreshing(false);
  }
  // flatlist 는 key를  string으로만 받음
  const [Items, setItems] = useState([
    {
      title: `title 1`,
      data: [`Item 1-1`, `Item 1-2`]
    }
  ]);

  return (

    <SectionList
      sections={Items}
      keyExtractor={(item, index) => index.toString()}

      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
          color={['#dd9900']}
        />
      }

      renderSectionHeader={({ section }) =>
        <Text style={styles.header}>{section.title}</Text>
      }
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item}</Text>
        </View>
      )}
    />
  );

}



const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  item: {
    borderWidth: 1,
    backgroundColor: '#5ab9fa',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  text: {
    color: '#000000',
    fontSize: 15,
    fontStyle: 'italic',
    margin: 3,
  },
  header: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAED7D',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#f03300',
  },

});

