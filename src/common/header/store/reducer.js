// header reducer 专门对header的数据和操作
import { SEARCH_FOCUS, SEARCH_BLUR } from "./actionTypes";
import { fromJS } from "immutable";
// immutable 库
// immutable 对象

// fromJS 把普通的js对象改成immutable对象
const defaultState = fromJS({
  focused: false,
});
export default (state = defaultState, action) => {
  if (action.type === SEARCH_FOCUS) {
    // immutable 对象的set方法，会结合之期的immutable对象的值和设置的值，返回一个全新的值
    return state.set("focused", true);
  }
  if (action.type === SEARCH_BLUR) {
    return state.set("focused", false);
  }

  return state;
};
