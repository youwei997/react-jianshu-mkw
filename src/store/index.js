import { createStore } from "redux";
import reducer from "./reducer";

// createStore 传入 reducer函数
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
