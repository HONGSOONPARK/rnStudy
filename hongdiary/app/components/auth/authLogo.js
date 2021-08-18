import React from 'react';
import { View, Image } from 'react-native';
import LogoImage from '../../assets/images/diary_login_logo.png'

const LogoComponent = () => (
    <View style={{alignItems: 'center' }}>  
        <Image 
            source={LogoImage}
            resizeMode={'contain'}
            style={{
                width: 300,
                height: 150
            }}/>
    </View>


)

export default LogoComponent;