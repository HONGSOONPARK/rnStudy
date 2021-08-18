// 여러 리듀서를 사용하기 떄문에 combine 사용
import { combineReducers } from "redux";
import Sample from './sample_reducer'


const rootReducer = combineReducers({
    Sample
})

export default rootReducer;