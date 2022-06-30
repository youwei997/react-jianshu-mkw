import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./common/header";
import store from "./store";
import Home from "./pages/home/index";
import Detail from "./pages/detail/index";

class App extends Component {
  render() {
    return (
      //  Provider 的子组件都有能力使用store
      <Provider store={store}>
        <div>
          <Header></Header>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/detail" element={<Detail></Detail>}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
