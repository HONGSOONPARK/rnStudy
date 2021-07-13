import React from 'react';
import {
    View,
    StyleSheet,
    Text
}from 'react-native';

import GlobalStyle from '../common/globalStyles';

import MapView from 'react-native-maps'; 

export default function MapSreen({route}){

    
    const {title} = route.params;

    return(
        <View style={styles.body}>
            <Text style={[
                GlobalStyle.map_text
            ]}>
            Map, {title}
            </Text>

            <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.543972,
              longitude: 126.947554,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          >
          </MapView>
        
        </View>
    );

}

const styles = StyleSheet.create({
    body :{
        flex:1,
        alignItems:'center'
    },
    text : {
        fontSize:30,
        color:'#000000'
    },
    map : { 
        width:'100%',
        height:'100%',
    }
});