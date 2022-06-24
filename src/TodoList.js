import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
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
  }
  render() {
    return (
      <div>
        <Input placeholder="Todo Info" value={this.state.inputValue} />
        <Button type="primary">提交</Button>

        <List
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={this.state.list}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </div>
    );
  }
}
