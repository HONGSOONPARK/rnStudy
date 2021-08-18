import React, { Component } from 'react';
import type { Node } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';


const Generator = (props) => (
    <Button
        title={props.title}
        onPress={()=> props.add()}

    />
)

const styles = StyleSheet.create({
})


export default Generator;