import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";

// 函数式组件
// const App = () => {
//   return <Input placeholder="Basic usage" />;
// };
//
// export default App;

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

// 类组件 必须要有render钩子函数和return
export default class TodoList extends Component {
  render() {
    return (
      <div>
        <Input placeholder="Todo Info" />
        <Button type="primary">提交</Button>

        <List
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={data}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </div>
    );
  }
}
