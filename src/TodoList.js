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
      inputValue: "",
      list: ["react", "vue"],
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

  // button 提交事件
  handleSubmit() {
    this.setState({
      // list 先合并旧的list，在合并新的inputValue
      list: [...this.state.list, this.state.inputValue],
      //在清空inputValue
      inputValue: "",
    });
  }
  // 删除事件
  handleDelete(index) {
    // immutable
    // react 不允许直接修改state
    // 必须得把list拷贝一份出来修改，然后在setState
    const list = this.state.list;
    list.splice(index, 1);
    this.setState({ list });
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
          <button onClick={this.handleSubmit.bind(this)}>提交</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <li key={index} onClick={this.handleDelete.bind(this, index)}>
                {item}
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;
