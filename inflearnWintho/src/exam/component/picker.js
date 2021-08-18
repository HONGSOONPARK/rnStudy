import React, { Component } from 'react';
import type { Node } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Button,
    ActivityIndicator,
} from 'react-native';

import { Picker } from '@react-native-community/picker'
import Slider from '@react-native-community/slider';

class PickerComponent extends Component{

    state = {
        country: 'korea',
        value: 50
    }

    sliderValueChange = (value) =>{
        this.setState({
            value: value
        })
    }

    render(){
        return(
                <View style = { styles.container } >

                <ActivityIndicator
                    size="large"
                    color="green"
                    animating={true}
                    style={{}}
                />
                
                <Slider
                    style={{height:40, width: 300}}
                    value={this.state.value}
                    minimumValue={0}
                    maximumValue={100}
                    onValueChange={this.sliderValueChange}
                    maximumTrackTintColor='yellow'
                    minimumTrackTintColor='blue'
                    step={1}
                />
           
                <Text style={styles.inputStyle}>
                    { this.state.value }
                </Text>

                <Picker
                    style={{
                        height: 50,
                        width: 250,
                    }}

                    selectedValue={this.state.country}
                    onValueChange={(val, idx) => this.setState({ country: val })}
                >
                    <Picker.Item label="korea" value="korea" />
                    <Picker.Item label="canada" value="canada" />

                </Picker>
            </View>
            )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        marginBottom: 200,
        alignItems: 'center',
    },
    inputStyle: {
        fontSize:50,
        color: 'black',
        
    }
})


export default PickerComponent;