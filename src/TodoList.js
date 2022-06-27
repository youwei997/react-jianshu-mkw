import React, { Component } from "react";
// import store from "./store";
import { connect } from "react-redux";

class TodoList extends Component {
  render() {
    return (
      <div>
        <div>
          <input
            value={this.props.inputValue}
            onChange={this.props.handleInputChange}
          />
          <button>提交</button>
        </div>
        <ul>
          <li>aa</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
  };
};

// store.dispatch 被映射到props里
// dispatch 就是store.dispatch方法
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const action = {
        type: "change_input_value",
        value: e.target.value,
      };
      dispatch(action);
    },
  };
};

// connect方法 ,让TodoList组件和store做连接
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
