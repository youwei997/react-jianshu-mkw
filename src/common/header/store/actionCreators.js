import { SEARCH_FOCUS, SEARCH_BLUR } from "./actionTypes";
export const getSearchFocusAction = () => {
  return {
    type: SEARCH_FOCUS,
  };
};

export const getSearchBlurAction = () => {
  return {
    type: SEARCH_BLUR,
  };
};
