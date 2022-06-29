import { combineReducers } from "redux";
// 导入某个组件的reducer
import { reducer as headerReducer } from "../common/header/store/";

// combineReducers 用于合并所有小的reducer
const reducer = combineReducers({
  header: headerReducer,
});
export default reducer;
