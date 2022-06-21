import React, { Fragment } from "react";

class TodoList extends React.Component {
  render() {
    return (
      // Fragment占位标签，不渲染到dom上，类似vue中的template
      <Fragment>
        <div>TodoList</div>
        <div>
          <input />
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
