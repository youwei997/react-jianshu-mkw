// import React from "react";

import TodoList from "./TodoList";

// react 18的挂在dom方式
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TodoList />);

// react18 之前
// import ReactDOM from "react-dom";
//
// ReactDOM.render(
//   <TodoList />,
//   document.getElementById("root")
// );
