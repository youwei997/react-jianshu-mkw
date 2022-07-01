// header reducer 专门对header的数据和操作
// import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";
import { actionTypes } from "./index";
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articleListPage: 1,
  showBackTop: false,
});

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList),
  });
};

const addHomeList = (state, action) => {
  const list = fromJS(action.list);
  const articleList = state.get("articleList").concat(list);
  const nextPage = action.nextPage;
  return state.merge({
    articleList: articleList,
    articleListPage: nextPage,
  });
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return changeHomeData(state, action);
    case actionTypes.ADD_HOME_LIST:
      return addHomeList(state, action);
    case actionTypes.TOGGLE_SCROLL_SHOW:
      return state.set("showBackTop", action.show);
    default:
      return state;
  }
};
export default reducer;
