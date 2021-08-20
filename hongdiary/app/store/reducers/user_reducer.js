import {
    SIGN_IN, SIGN_UP, AUTO_SIGN_IN
} from '../types';

// 리듀서는 state와 action을 인자로 받아와서 분기처리한다
export default function (state = {}, action) {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                auth: {
                    userId: action.payload.localId || false,
                    token: action.payload.idToken || false,
                    refToken: action.payload.refreshToken || false
                }
            }
        case SIGN_UP:
            return {
                ...state,
                auth: {
                    userId: action.payload.localId || false,
                    token: action.payload.idToken || false,
                    refToken: action.payload.refreshToken || false
                }
            }

        case AUTO_SIGN_IN:
            return {
                ...state,
                auth: {
                    userId: action.payload.user_id || false,
                    token: action.payload.id_token || false,
                    refToken: action.payload.refresh_token || false
                }
            }
        default:
            return state;
    }
}