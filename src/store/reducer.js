// 定义数据
const defaultState = {
  inputValue: "123",
  list: ["1", "2"],
};

// reducer 必须导出一个函数
// reducer负责管理数据，怎么处理怎么存，都是由reducer来管理
export default (state = defaultState, action) => {
  return state;
};
