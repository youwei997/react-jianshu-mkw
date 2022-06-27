import { ADD_ITEM, CHANGE_INPUT_VALUE, DELETE_ITEM } from "./actionTypes";

export const getInputChangeAction = (value) => {
  return {
    type: CHANGE_INPUT_VALUE,
    value,
  };
};

export const getAddItemAction = () => {
  return {
    type: ADD_ITEM,
  };
};

export const getDeleteItemAction = (index) => {
  return {
    type: DELETE_ITEM,
    index,
  };
};
