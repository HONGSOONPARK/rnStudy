// 여러 리듀서를 사용하기 떄문에 combine 사용
import { combineReducers } from "redux";
import User from './user_reducer'


const rootReducer = combineReducers({
    User
})

export default rootReducer;