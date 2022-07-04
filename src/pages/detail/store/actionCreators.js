import axios from "axios";
import { actionTypes } from "./index";

const getDetailAction = (result) => {
  return {
    type: actionTypes.CHANGE_DETAIL,
    data: result,
  };
};

export const getDetail = () => {
  return (dispatch) => {
    axios.get("/api/detail.json").then((res) => {
      const result = res.data.data;
      dispatch(getDetailAction(result));
    });
  };
};
