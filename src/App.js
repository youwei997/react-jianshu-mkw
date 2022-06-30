import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./common/header";
import store from "./store";

class App extends Component {
  render() {
    return (
      //  Provider 的子组件都有能力使用store
      <Provider store={store}>
        <div>
          <Header></Header>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<div>home</div>}></Route>
              <Route path="/detail" element={<div>detail</div>}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
