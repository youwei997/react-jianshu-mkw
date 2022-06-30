import { combineReducers } from "redux-immutable";
// redux-immutable 里的 combineReducers 生成的数据就是immutable数据

// 导入某个组件的reducer
import { reducer as headerReducer } from "../common/header/store/";
import { reducer as homeReducer } from "../pages/home/store/";

// combineReducers 用于合并所有小的reducer
const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
});
export default reducer;
