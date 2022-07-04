// header reducer 专门对header的数据和操作
// import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";
import { actionTypes } from "./index";
const defaultState = fromJS({
  login: false,
  userInfo: {},
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LOGIN:
      return state.merge({
        userInfo: fromJS(action.data),
        login: true,
      });
    case actionTypes.CHANGE_LOGOUT:
      return state.set("login", false);
    default:
      return state;
  }
};
export default reducer;
