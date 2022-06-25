// 使用actionCreators 统一创建action
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
} from "./actionTypes";

// 返回CHANGE_INPUT_VALUE 的action
export const getInputChangeAction = (value) => {
  return {
    type: CHANGE_INPUT_VALUE,
    value,
  };
};

// 返回 ADD_TODO_ITEM 的action
export const getAddItemAction = () => {
  return {
    type: ADD_TODO_ITEM,
  };
};

// 返回 DELETE_TODO_ITEM 的action
export const getDeleteItemAction = (index) => {
  return {
    type: DELETE_TODO_ITEM,
    index,
  };
};
