import React, { Component, Fragment } from "react";
import "./App.css";
import { Input, Button, List } from "antd";

import store from "./store";

// import {
//   CHANGE_INPUT_VALUE,
//   ADD_TODO_ITEM,
//   DELETE_TODO_ITEM,
// } from "./store/actionTypes";

import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
} from "./store/actionCreators";

// 函数式组件
// const App = () => {
//   return <Input placeholder="Basic usage" />;
// };
//
// export default App;

// 类组件 必须要有render钩子函数和return
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);

    // 订阅store，不加这个，store改变，页面也不会改变
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return (
      <Fragment>
        <Input
          placeholder="Todo Info"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <Button type="primary" onClick={this.handleBtnClick}>
          提交
        </Button>

        <List
          // header={<div>Header</div>}
          // footer={<div>Footer</div>}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handleItemDelete.bind(this, index)}>
              {item}
            </List.Item>
          )}
        />
      </Fragment>
    );
  }

  // input事件
  handleInputChange(e) {
    // 创建一个action 里面必须要有type（描述，描述你这个action要做什么）
    // const action = {
    //   type: CHANGE_INPUT_VALUE,
    //   value: e.target.value,
    // };
    // getInputChangeAction 返回一个action对象
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  // 订阅store的方法
  handleStoreChange() {
    // 把reducer返回的newState数据存入到state，页面就改变
    this.setState(store.getState());
  }

  // 提交事件
  handleBtnClick(e) {
    // const action = {
    //   type: ADD_TODO_ITEM,
    // };
    const action = getAddItemAction();
    store.dispatch(action);
  }

  // item 删除事件
  handleItemDelete(index) {
    // const action = {
    //   type: DELETE_TODO_ITEM,
    //   index: index,
    // };
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }
}
