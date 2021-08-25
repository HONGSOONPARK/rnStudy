import React from 'react';
import { Component } from 'react';
import { View, Image, Animated } from 'react-native';
import { auth } from '../../utils/misc'


const LogoImage = require('../../assets/images/diary_login_logo.png')

class Loading extends Component {

    constructor(props){
        super(props);
        this.state ={
            xValue: new Animated.Value(60),
            opacity: new Animated.Value(0)
        }
    }

    // 로그인 여부 확인, 분기처리
    onComplete = () => {
        auth.onAuthStateChanged((user) => {
            if(user){
                this.props.navigation.navigate("AppTabComponent");
            }else{
                this.props.navigation.navigate("SignIn");
            }
        })
    }
    

    onLoad = () => {
        Animated.timing(this.state.opacity, {
            toValue: 1, 
            duration: 2000,
            useNativeDriver: false
        }).start(()=>{
            this.onComplete()
        })
    }

    render() {
        return (
            <View
                style={{
                     height: '100%', 
                     backgroundColor: '#30A9DE', 
                     justifyContent: 'center', 
                     alignItems: 'center' 
                    }}>
                <Animated.Image
                    source={LogoImage}
                    style={{
                        width: 300, height: 300,
                        opacity: this.state.opacity,
                        left: this.state.opacity.interpolate({
                            inputRange: [0, 1],
                            outputRange: [60, 0]
                        })
                    }}
                    onLoad={this.onLoad}
                >
                </Animated.Image>
            </View>
        )
    }
}

export default Loading;