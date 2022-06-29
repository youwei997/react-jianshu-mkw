// header reducer 专门对header的数据和操作
const defaultState = {
  focused: false,
};
export default (state = defaultState, action) => {
  if (action.type === "search_focus") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.focused = true;
    return newState;
  }
  if (action.type === "search_blur") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.focused = false;
    return newState;
  }

  return state;
};
