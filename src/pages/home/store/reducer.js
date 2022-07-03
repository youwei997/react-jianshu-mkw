// header reducer 专门对header的数据和操作
// import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";
import { actionTypes } from "./index";
const defaultState = fromJS({
  topicList: [], //标签列表
  articleList: [], //首页列表
  recommendList: [], //右侧日更挑战等按钮
  articleListPage: 1, //首页列表页码
  showBackTop: false, //显隐按钮
  writerList: [], //推荐作者按钮
  writerPage: 1, // 热门搜索列表页码
  writerTotalPages: 1, // 热门搜索列表总页码
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

const changeWriterList = (state, action) => {
  return state.merge({
    writerList: fromJS(action.data),
    writerTotalPages: action.totalPages,
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
    case actionTypes.CHANGE_WRITER_LIST:
      return changeWriterList(state, action);
    case actionTypes.CHANGE_PAGE:
      return state.set("writerPage", action.writerPage);
    default:
      return state;
  }
};
export default reducer;
