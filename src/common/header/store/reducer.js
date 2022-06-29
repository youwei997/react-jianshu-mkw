// header reducer 专门对header的数据和操作
import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";
// immutable 库
// immutable 对象

// fromJS 把普通的js对象改成immutable对象
// 内层的数组也会变成immutable数组
const defaultState = fromJS({
  focused: false, // input是否聚焦
  mouseIn: false, // 热门搜索鼠标移入
  list: [], // 热门搜索列表
  page: 1, // 热门搜索列表页码
  totalPages: 1, // 热门搜索列表总页码
});
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      // immutable 对象的set方法，会结合之期的immutable对象的值和设置的值，返回一个全新的值
      return state.set("focused", true);
    case actionTypes.SEARCH_BLUR:
      return state.set("focused", false);
    case actionTypes.CHANGE_LIST:
      // return state
      //   .set("list", fromJS(action.data))
      //   .set("totalPages", action.totalPages);

      // merge 同时改变多个内容，比set性能高
      return state.merge({
        list: fromJS(action.data),
        totalPages: action.totalPages,
      });
    case actionTypes.MOUSE_ENTER:
      return state.set("mouseIn", true);
    case actionTypes.MOUSE_LEAVE:
      return state.set("mouseIn", false);
    case actionTypes.CHANGE_PAGE:
      return state.set("page", action.page);
    default:
      return state;
  }
};
export default reducer;
