import React from 'react';
import { View, Image } from 'react-native';
import LogoImage from '../../assets/images/diary_login_logo.png'

const LogoComponent = () => (
    <View style={{alignItems: 'center', marginBottom: 30 }}>  
        <Image 
            source={LogoImage}
            resizeMode={'contain'}
            style={{
                width: 300,
                height: 120
            }}/>
    </View>


)

export default LogoComponent;