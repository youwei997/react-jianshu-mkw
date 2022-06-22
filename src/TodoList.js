import React, { Fragment } from "react";

// 引入css
import "./style.css";

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
      list: ["react", "vue", "<h1>angular</h1>"],
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
      // Fragment占位标签，也是一个react组件，不渲染到dom上，类似vue中的template
      <Fragment>
        {/* 测试react注释，必须得在外面包花括号，花括号里写的是js表达式 */}
        <div>TodoList</div>
        <div>
          {/* htmlFor 等同于原生label的for， insertArea为某个元素的id  */}
          <label htmlFor="insertArea">使用label扩大input的点击范围</label>
          {/* react jsx 语法中，标签的class改为className，class在react中会认为是class类 */}
          <input
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button onClick={this.handleSubmit.bind(this)}>提交</button>
        </div>
        <ul>
          {/* 
          dangerouslySetInnerHTML 代表使用原生html， 类似vue的v-html
          {{ __html: item }} 第一个为表达式花括号(规定语法)， 里面的是对象
          dangerouslySetInnerHTML={{ __html: item }}
          */}
          {this.state.list.map((item, index) => {
            return (
              <li
                key={index}
                onClick={this.handleDelete.bind(this, index)}
                dangerouslySetInnerHTML={{ __html: item }}
              ></li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;
