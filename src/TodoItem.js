import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    // 和在标签上写是一样的，就是性能好一点
    this.handleClick = this.handleClick.bind(this);
  }

  // 符合以下两种情况才会被执行
  // 1. 一个组件需要从父组件接收参数
  // 2. 子组件第一次不会被执行，第二次才会被执行
  componentWillReceiveProps(nextProps, nextContext) {
    // console.log("componentWillReceiveProps");
  }

  // 组件被移除之前执行
  componentWillUnmount() {
    // console.log("componentWillUnmount");
  }

  // 组件被更新之前自动执行
  // 父组件render重新执行时，会把子组件的render也重新执行，这样比较耗性能
  // 如果nextProps和父组件传递的不一致，就让子组件更新，否则不更新
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log(this.props);
    if (nextProps.item !== this.props.item) return true;
    return false;
  }

  render() {
    // console.log('TodoItem 父组件传递的props发生改变')
    console.log("子组件render");
    const { item, test } = this.props;
    console.log(item);
    return (
      <div onClick={this.handleClick}>
        {test} -- {item}
      </div>
    );
  }

  handleClick() {
    // 调用父组件传递的方法
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }
}

// 对TodoItem组件的props做校验
TodoItem.propTypes = {
  // isRequired 必传,不加就是可传可不传，不传就不进行类型校验
  // oneOfType 或者
  test: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  item: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

// prop默认值
TodoItem.defaultProps = {
  test: 12,
};
