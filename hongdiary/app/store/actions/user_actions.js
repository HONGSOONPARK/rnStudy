import { SIGN_IN, SIGN_UP, AUTO_SIGN_IN } from '../types';

import axios from 'axios';

// api 
import { SIGNUP, SIGNIN, REFRESH, auth } from '../../utils/misc';

export const autoSignIn = (refToken) => {
    const request = axios({
        method: 'POST',
        url: REFRESH,
        data: "grant_type=refresh_token&refresh_token="+refToken,
        header: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }).then(response => {
        return response.data;
    }).catch(err => {
        alert("error !! ");
        return false;
    })

    return {
        type: AUTO_SIGN_IN,
        payload: request
    }
}

export function signUp(data) {
    const request = axios({
        method: 'POST',
        url: SIGNUP,
        data: {
            email: data.email,
            password: data.password,
            returnSecureToken: true
        },
        header:{
            "Content-Type":"application/json"
        }
        
    }).then(response=>{
        console.log(response.data)
        return response.data;
    }).catch(err=>{
        alert("error !! ");
        return false;
    })

    return {
        type: SIGN_UP,
        payload: request
    }
}

firebaseLogin = async (email, password) => {
    try {
        let user = auth.signInWithEmailAndPassword(email, password);
        // console.warn('user: ', user)
    } catch (error) {
        // console.warn('errr: ', err)
    }
}

export function signIn(data) {

    firebaseLogin(data.email, data.password);

    const request = axios({
        method: 'POST',
        url: SIGNIN,
        data: {
            email: data.email,
            password: data.password,
            returnSecureToken: true
        },
        header:{
            "Content-Type":"application/json"
        }
        
    }).then(response=>{
        console.log(response.data)
        return response.data;
    }).catch(err=>{
        alert("error !! ");
        return false;
    })

    return {
        type: SIGN_UP,
        payload: request
    }
}