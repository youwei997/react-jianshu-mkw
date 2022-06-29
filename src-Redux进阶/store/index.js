// redux 使用流程
// 需要有个store，页面从store取数据，再派发一个流程，把action和取到的数据一起给到reducer
// reducer把action 结合之期的数据，返回一个新的数据给到store，store更新了自己的数据以后
// 再告诉页面，store数据更新了，页面就会自动的更新

import { createStore } from "redux";
import reducer from "./reducer";
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
