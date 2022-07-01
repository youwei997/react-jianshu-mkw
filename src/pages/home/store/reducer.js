// header reducer 专门对header的数据和操作
// import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
});
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "change_home_data":
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
      });
    default:
      return state;
  }
};
export default reducer;
