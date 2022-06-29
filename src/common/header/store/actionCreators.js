import * as actionTypes from "./actionTypes";
import axios from "axios";

// 热搜列表
const getHeaderListAction = (data) => {
  return {
    type: actionTypes.CHANGE_LIST,
    data,
    totalPages: Math.ceil(data.length / 10),
  };
};

// 搜索框聚焦
export const getSearchFocusAction = () => {
  return {
    type: actionTypes.SEARCH_FOCUS,
  };
};

// 搜索框失焦
export const getSearchBlurAction = () => {
  return {
    type: actionTypes.SEARCH_BLUR,
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

// 鼠标移入事件
export const getMouseEnterAction = () => {
  return {
    type: actionTypes.MOUSE_ENTER,
  };
};

// 鼠标移出事件
export const getMouseLeaveAction = () => {
  return {
    type: actionTypes.MOUSE_LEAVE,
  };
};

export const getChangePageAction = (page) => {
  return {
    type: actionTypes.CHANGE_PAGE,
    page,
  };
};
