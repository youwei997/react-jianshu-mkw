import React, { Fragment } from "react";

class TodoList extends React.Component {
  // 一个类就一定有一个constructor构造函数
  // 最优先执行的函数
  constructor(props) {
    // 调用父类构造函数
    super(props);
    // 组件的状态
    // 必须得写这一句
    this.state = {
      inputValue: "111",
      list: [],
    };
  }

  // input事件
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
    // console.log(this.state.inputValue);
    // console.log(e.target.value);
  }

  render() {
    return (
      // Fragment占位标签，不渲染到dom上，类似vue中的template
      <Fragment>
        <div>TodoList</div>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button>提交</button>
        </div>
        <ul>
          <li>li1</li>
          <li>li2</li>
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;
