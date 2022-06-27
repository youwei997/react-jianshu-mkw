import { takeEvery, put } from "redux-saga/effects";
import { GET_INIT_LIST } from "./actionTypes";
import axios from "axios";
import { initListAction } from "./actionCreators";

function* getInitList() {
  try {
    const res = yield axios.get("http://localhost:3001/TodoList");
    const action = initListAction(res.data.data);
    // 再派发给store
    yield put(action);
  } catch (e) {
    console.log(e);
  }
}

//Generator 函数
function* mySaga() {
  // 声明，如果接收到的类型是GET_INIT_LIST，就执行getInitList
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;
