// 首页列表信息
import axios from "axios";
import { actionTypes } from "./index";
import { CHANGE_WRITER_LIST } from "./actionTypes";

// 获取首页所有列表数据action，派发给reducer
const changeHomeData = (result) => {
  return {
    type: actionTypes.CHANGE_HOME_DATA,
    articleList: result.articleList,
    recommendList: result.recommendList,
    topicList: result.topicList,
  };
};

// 首页列表加载更多action
const addHomeList = (result, page) => {
  return {
    type: actionTypes.ADD_HOME_LIST,
    list: result,
    nextPage: page,
  };
};

// 显隐返回顶部按钮action
export const toggleTopShow = (show) => {
  return {
    type: actionTypes.TOGGLE_SCROLL_SHOW,
    show,
  };
};

// 获取推荐作者列表action
export const getWriterListAction = (data) => {
  return {
    type: actionTypes.CHANGE_WRITER_LIST,
    data,
    totalPages: Math.ceil(data.length / 5),
  };
};

// 获取首页列表接口
export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get("/api/home.json").then((res) => {
      const result = res.data.data;
      const action = changeHomeData(result);
      dispatch(action);
    });
  };
};

// 获取首页列表加载更多接口
export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get("/api/homeList.json?page=" + page).then((res) => {
      const result = res.data.data;
      dispatch(addHomeList(result, page));
    });
  };
};

export const getWriterList = () => {
  return (dispatch) => {
    axios.get("/api/writerList.json").then((res) => {
      const result = res.data.data;
      dispatch(getWriterListAction(result));
    });
  };
};

export const getChangePageAction = (writerPage) => {
  return {
    type: actionTypes.CHANGE_PAGE,
    writerPage,
  };
};
