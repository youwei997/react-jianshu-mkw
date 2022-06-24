import React, { Component, Fragment } from "react";
import "./App.css";
import { Input, Button, List } from "antd";

import store from "./store";

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
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={this.state.list}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </Fragment>
    );
  }

  handleInputChange(e) {
    // 创建一个action 里面必须要有type（描述，描述你这个action要做什么）
    const action = {
      type: "change_input_value",
      value: e.target.value,
    };
    store.dispatch(action);
  }

  // 订阅store的方法
  handleStoreChange() {
    // 把reducer返回的新store数据存入到state，页面就改变
    this.setState(store.getState());
  }

  handleBtnClick(e) {
    const action = {
      type: "add_todo_item",
    };
    store.dispatch(action);
  }
}
