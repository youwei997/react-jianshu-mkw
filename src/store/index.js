import { createStore } from "redux";
import reducer from "./reducer";

// createStore 传入 reducer函数
const store = createStore(reducer);
export default store;
