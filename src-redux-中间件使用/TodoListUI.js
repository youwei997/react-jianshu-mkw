import React, { Component } from "react";
import { Button, Input, List } from "antd";

// 无状态组件
// 当普通组件(class)里只有一个render函数时,可以使用无状态组件替换它
// 性能好,没有生命周期函数等
const TodoListUI = (props) => {
  return (
    <div>
      <Input
        placeholder="Todo Info"
        value={props.inputValue}
        onChange={props.handleInputChange}
      />
      <Button type="primary" onClick={props.handleBtnClick}>
        提交
      </Button>

      <List
        // header={<div>Header</div>}
        // footer={<div>Footer</div>}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item data-index={index} onClick={props.handleItemDelete}>
            {item}
          </List.Item>
        )}
      />
    </div>
  );
};

// ui组件
// 普通组件(有生命周期函数)
// class TodoListUI extends Component {
//   render() {
//     return (
//       <div>
//         <Input
//           placeholder="Todo Info"
//           value={this.props.inputValue}
//           onChange={this.props.handleInputChange}
//         />
//         <Button type="primary" onClick={this.props.handleBtnClick}>
//           提交
//         </Button>
//
//         <List
//           // header={<div>Header</div>}
//           // footer={<div>Footer</div>}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <List.Item data-index={index} onClick={this.props.handleItemDelete}>
//               {item}
//             </List.Item>
//           )}
//         />
//       </div>
//     );
//   }
// }

export default TodoListUI;
