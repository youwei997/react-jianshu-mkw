import React, { Component } from "react";
export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    // 和在标签上写是一样的，就是性能好一点
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return <div onClick={this.handleClick}>{this.props.item}</div>;
  }
  handleClick() {
    // 调用父组件传递的方法
    this.props.deleteItem(this.props.index);
  }
}
