import React from "react";
// import store from "./store";
import { connect } from "react-redux";
import {
  getAddItemAction,
  getDeleteItemAction,
  getInputChangeAction,
} from "./store/actionCreators";

// ui组件
const TodoList = (props) => {
  const {
    inputValue,
    list,
    handleInputChange,
    handleBtnClick,
    handleDeleteItem,
  } = props;
  return (
    <div>
      <div>
        <input value={inputValue} onChange={handleInputChange} />
        <button onClick={handleBtnClick}>提交</button>
      </div>
      <ul>
        {list.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                handleDeleteItem(index);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  };
};

// store.dispatch 被映射到props里
// dispatch 就是store.dispatch方法
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      // const action = {
      //   type: CHANGE_INPUT_VALUE,
      //   value: e.target.value,
      // };

      const action = getInputChangeAction(e.target.value);
      dispatch(action);
    },
    handleBtnClick() {
      // const action = {
      //   type: ADD_ITEM,
      // };
      const action = getAddItemAction();
      dispatch(action);
    },
    handleDeleteItem(index) {
      // const action = {
      //   type: DELETE_ITEM,
      //   index,
      // };

      const action = getDeleteItemAction(index);
      dispatch(action);
    },
  };
};

// connect方法 ,让TodoList组件和store做连接
// TodoList是一个ui组件,但是connect把一些数据和业务逻辑相结合的时候,connect返回的就是一个容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
