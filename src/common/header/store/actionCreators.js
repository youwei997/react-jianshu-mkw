import { SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST } from "./actionTypes";
import axios from "axios";
// 搜索框聚焦
export const getSearchFocusAction = () => {
  return {
    type: SEARCH_FOCUS,
  };
};

// 搜索框失焦
export const getSearchBlurAction = () => {
  return {
    type: SEARCH_BLUR,
  };
};

// 热搜列表
export const getHeaderListAction = (data) => {
  return {
    type: CHANGE_LIST,
    data,
  };
};

// 获取热搜列表
export const getSearchListAction = () => {
  // dispatch 派发到reducer
  // /xx/xx.xx 会先在src下找目录，如果没找到会在public下找对应的目录
  return (dispatch) => {
    axios
      .get("/api/headerList.json")
      .then((res) => {
        const data = res.data.data;
        const action = getHeaderListAction(data);
        dispatch(action);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
