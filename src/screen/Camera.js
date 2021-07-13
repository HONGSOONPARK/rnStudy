import React from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';

import RNFS  from 'react-native-fs';

import CustomButton from './CustomComponents/CustomButton';

export default function Camera() {

    const [{ cameraRef }, { takePicture }] = useCamera(null);
    const captureHandle = async () => {
        try {
            const data = await takePicture();
            console.log(data.uri);
            const filePath = data.uri;
            const newFilePath = RNFS.ExternalDirectoryPath + '/test.jpg';
            RNFS.moveFile(filePath, newFilePath).then( () => {
                console.log('IMAGE MOVED', filePath, '--to -- ', newFilePath)
            }).catch(error => {
                console.log(error);
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.body}>
            <Text style={styles.text}>무야호</Text>
            <RNCamera
                ref={cameraRef}
                type={RNCamera.Constants.Type.front}
                style={styles.preview}>

                <CustomButton
                    title='찰칵'
                    color='#1eb900'
                    onPressFunction={() => captureHandle()}
                />

            </RNCamera>

        </View>

    );

}


const styles = StyleSheet.create({
    body: {
        flex: 1,
        // alignItems:'center',
    },
    text: {
        alignSelf:'center',
    },
    preview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
});