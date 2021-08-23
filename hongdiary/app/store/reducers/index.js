// 여러 리듀서를 사용하기 떄문에 combine 사용
import { combineReducers } from "redux";
import User from './user_reducer';
import Diaries from './diary_reducer';


const rootReducer = combineReducers({
    User,
    Diaries
})

export default rootReducer;