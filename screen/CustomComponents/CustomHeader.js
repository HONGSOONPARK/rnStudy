import React from 'react';
import {
    Text,
    StyleSheet,
    View,
} from 'react-native';

const CustomHeader = (props) => {
    return(
      <View
        style={styles.view}
      >
        <Text style={styles.text}>
          React Native Custom Header 
        </Text>

      </View>
     
    )
}


const styles = StyleSheet.create({
  button: {
    width: 120,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
    margin: 5
  },
  text: {
    color: '#d3Ff03'
  },
  view:{
    width:'100%',
    justifyContent: 'center',
    alignItems:'center',
    height:50,
    backgroundColor:'#8041D9',
  }

 
});

export default CustomHeader;