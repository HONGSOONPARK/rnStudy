// fcm api key
export const APIKEY = `AIzaSyC3iTm8BY3mtT2mHxzJqHuWq918KpvXtgA`;

// 회원가입
export const SIGNUP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIKEY}`;

// 로그인
export const SIGNIN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKEY}`;

// refresh 토큰
export const REFRESH = `https://securetoken.googleapis.com/v1/token?key=${APIKEY}`;

// AsyncStorage 사용, 내부 저장소
// 참고 url : https://reactnative.dev/docs/asyncstorage
import AsyncStorage from '@react-native-async-storage/async-storage';


// refresh -> get -> set

export const setTokens = async (values, callBack) => {
    const firstPair = ["@hongdiary@userId", values.userId]
    const secondPair = ["@hongdiary@token", values.token]
    const thirdPair = ["@hongdiary@refToken", values.refToken]
    try {
        // await => 비동기
      await AsyncStorage.multiSet([firstPair, secondPair, thirdPair]).then(response=>{callBack()})
    } catch(e) {
      //save error
    }
  
    console.log("Done.")
  }



  // callBack 의 쓰임새? 잘 모르겠다ㅊ
export const getTokens  = async (callBack) => {
    let values
    try {
      values = await AsyncStorage.multiGet([
        '@hongdiary@userId', 
        '@hongdiary@token',
        '@hongdiary@refToken',
      ]).then(values=>{
        callBack(values);
      });

      //  console.log(values)
    } catch(e) {
      // read error
    }
    // console.log(values)
  
    // example console.log output:
    // [ ['@MyApp_user', 'myUserValue'], ['@MyApp_key', 'myKeyValue'] ]
  }