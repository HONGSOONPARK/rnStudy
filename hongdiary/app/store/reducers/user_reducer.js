import {
    SIGN_IN, SIGN_UP
} from '../types';

// 리듀서는 state와 action을 인자로 받아와서 분기처리한다
export default function (state = {}, action) {
    switch (action.type) {
        case SIGN_IN : 
            return {
                ...state,
                auth:{
                    email: action.payload.email || false,
                    token: action.payload.token || false
                }
            }
        case SIGN_UP :
            return {
                ...state,
                auth:{
                    email: action.payload.email || false,
                    token: action.payload.token || false
                }
            }
        default:
            return state;
    }
}