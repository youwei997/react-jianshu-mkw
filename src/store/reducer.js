import { combineReducers } from "redux-immutable";
// redux-immutable 里的 combineReducers 生成的数据就是immutable数据

// 导入某个组件的reducer
import { reducer as headerReducer } from "../common/header/store/";
import { reducer as homeReducer } from "../pages/home/store/";
import { reducer as detailReducer } from "../pages/detail/store";
import { reducer as loginReducer } from "../pages/login/store";

// combineReducers 用于合并所有小的reducer
const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer,
});
export default reducer;
