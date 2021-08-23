import {
    GET_DIARIES
} from '../types';

// 리듀서는 state와 action을 인자로 받아와서 분기처리한다
export default function (state = {}, action) {
    switch (action.type) {
        case GET_DIARIES:
            return {
                ...state,
                documents: action.payload || false
            }
        default:
            return state;
    }
}