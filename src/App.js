import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./common/header";
import store from "./store";
import Home from "./pages/home/index";
import Detail from "./pages/detail/index";
import Login from "./pages/login";
import Write from "./pages/write";

class App extends Component {
  render() {
    return (
      //  Provider 的子组件都有能力使用store
      <Provider store={store}>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            {/*动态路由接收参数*/}
            <Route path="/detail/:id" element={<Detail></Detail>}></Route>
            {/*参数路由*/}
            {/*<Route path="/detail" element={<Detail></Detail>}></Route>*/}
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/write" element={<Write></Write>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
