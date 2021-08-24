/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import App from './app/index';
import { name as appName } from './app.json';

// redux 관련 내용
// compose -> 미들웨어 사용하기 위해, 인핸서를 사용하기 위해
import { createStore, applyMiddleware, compose } from 'redux';

// react native component 는 스스로 store를 찾을 수 없어서 provider를 쓴다
import { Provider } from 'react-redux';

// 비동기 처리가 필요한 action creator 사용을 위해 씀
import promiseMiddleware from 'redux-promise';
import reducers from './app/store/reducers'

// 리덕스 개발자도구와 미들웨어를 같이 사용하기 위해 사용
// 크롬 확장 프로그램에 작성된 자바 함수임
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// thunk
import thunkMiddleware from 'redux-thunk';


// 미들웨어 사용하는 스토어 생성
const createStoreWithMiddleware = createStore(reducers, composeEnhancers(
    applyMiddleware(promiseMiddleware, thunkMiddleware)
))


const appRedux = () => (
    <Provider store={createStoreWithMiddleware}>
        <App/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => appRedux);
