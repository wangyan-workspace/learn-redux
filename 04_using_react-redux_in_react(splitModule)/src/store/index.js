import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './counter';
import homeReducer from './home';

// 合并reducer
const reducer = combineReducers({
    counterData: counterReducer,
    homeData: homeReducer
});

// redux-devtools工具的调试
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// 中间件
const enhancer = composeEnhancer(applyMiddleware(thunk));

// 全局store
const store = createStore(reducer, enhancer);

export default store;
