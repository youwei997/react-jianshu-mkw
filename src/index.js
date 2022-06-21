// import React from "react";

// react 18的挂在dom方式
import ReactDOM from "react-dom/client";

import TodoList from "./TodoList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TodoList />);

// 旧的
// ReactDOM.render(
//   <App />,
//   document.getElementById("root")
// );
