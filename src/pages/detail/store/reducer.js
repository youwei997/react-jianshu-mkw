// header reducer 专门对header的数据和操作
// import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";
import { actionTypes } from "./index";
const defaultState = fromJS({
  title: "",
  content: "",
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_DETAIL:
      return state.merge({
        title: action.data.title,
        content: action.data.content,
      });
    default:
      return state;
  }
};
export default reducer;
