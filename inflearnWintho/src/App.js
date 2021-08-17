/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow strict-local
*/

import React, { Component } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import es6Test from './ES6';


// const App: () => Node = () => {
//   // es6Test();

//   return (
//     <SafeAreaView>
//       <View>
//         <Text>test</Text>
//       </View>
//     </SafeAreaView>
//   );
// };

class App extends Component {

  // 초기화, 직접 변경하면 안되는 특성을 갖음
  state = {
    sampleText: 'Hello World',
    sampleBoolean: true,
    sampleNum: 0,
  }

  inputText = () => (
    this.state.sampleBoolean ?
      <Text>sampleBoolean is true</Text>
      :
      <Text>sampleBoolean is false</Text>
  )

  changeState = () => {

    if (!this.state.sampleBoolean) {
      this.setState({
        sampleText: 'Text Changed!!!',
        sampleBoolean: true
      })
    } else {
      this.setState({
        sampleText: 'Hello World!!!',
        sampleBoolean: false
      })
    }

    console.log(this.state.sampleBoolean);

  }


  onAdd = () => {

    this.setState(prevState => {
      return {
        sampleNum: prevState.sampleNum + 1,
      }
    })



  }

  render() {

    return (
      <View style={styles.background}>
        <Text onPress={this.changeState}>
          {
            // this.inputText()
            this.state.sampleText
          }
        </Text>
        <Text onPress={this.onAdd}>
          {
            this.state.sampleNum
          }
        </Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }

})


export default App;