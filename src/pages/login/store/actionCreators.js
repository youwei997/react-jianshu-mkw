import axios from "axios";
import { actionTypes } from "./index";

export const login = (username, password) => {
  const data = { username, password };
  return (dispatch) => {
    axios
      .get("/api/login.json?username=" + username + "&password=" + password)
      .then((res) => {
        if (res.data.success) {
          const result = res.data.data;
          const action = {
            type: actionTypes.CHANGE_LOGIN,
            data: result,
          };
          dispatch(action);
        } else {
          alert("登录失败");
        }
      });
  };
};

export const logout = () => {
  return {
    type: actionTypes.CHANGE_LOGOUT,
  };
};
