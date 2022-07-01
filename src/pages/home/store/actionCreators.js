// 首页列表信息
import axios from "axios";
import { actionTypes } from "./index";
const changeHomeData = (result) => {
  return {
    type: actionTypes.CHANGE_HOME_DATA,
    articleList: result.articleList,
    recommendList: result.recommendList,
    topicList: result.topicList,
  };
};

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get("/api/home.json").then((res) => {
      const result = res.data.data;
      const action = changeHomeData(result);
      dispatch(action);
    });
  };
};
