// header reducer 专门对header的数据和操作
// import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";
import { actionTypes } from "./index";
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articleListPage: 1,
});
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
      });
    case actionTypes.ADD_HOME_LIST:
      const list = fromJS(action.list);
      const articleList = state.get("articleList").concat(list);
      const nextPage = action.nextPage;
      return state.merge({
        articleList: articleList,
        articleListPage: nextPage,
      });
    default:
      return state;
  }
};
export default reducer;
