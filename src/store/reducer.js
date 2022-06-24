// 定义数据
const defaultState = {
  inputValue: "123",
  list: ["1", "2"],
};

// reducer 必须导出一个函数
// reducer负责管理数据，怎么处理怎么存，都是由reducer来管理
// state 为上一次store中的数据集合， action组件dispatch传递过来的数据
// reducer 可以接受state，但是绝对不能修改state
const reducer = (state = defaultState, action) => {
  // 如果action的type 等于某一个描述
  if (action.type === "change_input_value") {
    // 拷贝一份新的state，不能修改旧的state
    const newState = JSON.parse(JSON.stringify(state));
    // 在新的state里修改数据
    newState.inputValue = action.value;
    // 在返回出去
    // 这步组件已经可以接收到改变后的值，但是得写store.subscribe()方法更新页面
    return newState;
  }

  if (action.type === "add_todo_item") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }

  return state;
};
export default reducer;
