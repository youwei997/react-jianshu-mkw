import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    // 和在标签上写是一样的，就是性能好一点
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    // console.log('TodoItem 父组件传递的props发生改变')
    const { item, test } = this.props;
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
