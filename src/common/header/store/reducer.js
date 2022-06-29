// header reducer 专门对header的数据和操作
import { SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST } from "./actionTypes";
import { fromJS } from "immutable";
// immutable 库
// immutable 对象

// fromJS 把普通的js对象改成immutable对象
// 内层的数组也会变成immutable数组
const defaultState = fromJS({
  focused: false,
  list: [],
});
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_FOCUS:
      // immutable 对象的set方法，会结合之期的immutable对象的值和设置的值，返回一个全新的值
      return state.set("focused", true);
    case SEARCH_BLUR:
      return state.set("focused", false);
    case CHANGE_LIST:
      return state.set("list", fromJS(action.data));
    default:
      return state;
  }
};
export default reducer;
