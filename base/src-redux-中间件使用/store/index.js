import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import todoSagas from "./sagas";

// store---------
// 必须是唯一的，一个应用只有一个store公共储存
// 只有store才能改变自己的内容
// reducer必须是纯函数（给固定的输入，有固定的输出）

// redux api
// createStore 创建一个store
// store.dispatch 派发一个store
// store.getState 获取到store的所有数据内容
// store.subscribe 订阅store的改变

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const sagaMiddleware = createSagaMiddleware();

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
// applyMiddleware(thunk)

// createStore 传入 reducer函数
const store = createStore(reducer, enhancer);
sagaMiddleware.run(todoSagas);
export default store;
