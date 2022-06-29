import React, { Component } from "react";
import Header from "./common/header";
import store from "./store";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      //  Provider 的子组件都有能力使用store
      <Provider store={store}>
        <Header></Header>
      </Provider>
    );
  }
}

export default App;
