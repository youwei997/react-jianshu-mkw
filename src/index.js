import React from "react";
import ReactDOM from "react-dom/client";
import TodoList from "./TodoList";
import { Provider } from "react-redux";
import store from "./store";

// Provider 用于连接store,内部的组件都可以使用store
// Provider 提供器,配合connect使用
const App = (
  <Provider store={store}>
    <TodoList></TodoList>
  </Provider>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App);
