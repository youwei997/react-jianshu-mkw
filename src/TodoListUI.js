import React, { Component } from "react";
import { Button, Input, List } from "antd";

// ui组件
class TodoListUI extends Component {
  render() {
    return (
      <div>
        <Input
          placeholder="Todo Info"
          value={this.props.inputValue}
          onChange={this.props.handleInputChange}
        />
        <Button type="primary" onClick={this.props.handleBtnClick}>
          提交
        </Button>

        <List
          // header={<div>Header</div>}
          // footer={<div>Footer</div>}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item data-index={index} onClick={this.props.handleItemDelete}>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default TodoListUI;
