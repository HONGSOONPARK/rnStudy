import React, { Component } from 'react';
import type { Node } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacity,
} from 'react-native';


const NumList = (props) => (
    props.num.map((item, idx) => (

        <TouchableOpacity
            key={idx}
            onPress={() => props.delete(idx)}
        >
            <Text>
                {item}
            </Text>
        </TouchableOpacity>

    ))

)

const styles = StyleSheet.create({
})


export default NumList;