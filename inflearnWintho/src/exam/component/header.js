import React, { Component } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


const Header = (props) => (
    <TouchableOpacity 
    style={styles.header}
    onPress={()=> alert('header')}
    // onLongPress={()=> alert('header')}
    // onPressIn={()=> alert('header')}
    // onPressOut={()=> alert('header')}
    >
    <View>
        <Text>{props.name}</Text>
    </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'pink',
        alignItems:'center',
        padding:5,
        width:'100%',
    }
})

export default Header;