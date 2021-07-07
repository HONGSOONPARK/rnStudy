import React from 'react';
import {
    Pressable,
    Text,
    StyleSheet,

} from 'react-native';

const HongButton = (props) => {
    return(
        <Pressable
        style={({ pressed }) => [
          { backgroundColor: pressed ? '#00ff' : props.color },
          styles.button,
          {...props.style}
        ]}

        // 버튼 주변 클릭 가능
        hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
        onPress={props.onPressFunction}
        android_ripple={{ color: '#00f' }}
        
      >
        <Text style={styles.text}>{props.title}</Text>
      </Pressable>
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
  }
 
});

export default HongButton;