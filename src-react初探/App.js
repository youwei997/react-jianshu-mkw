// function App() {
//   return (
//     <div className="App">
//      初始
//     </div>
//   );
// }

import React from "react";

// App类，继承了React.Component类，说明它就是react的一个组件
class App extends React.Component {
  // 在render函数里的html标签都是jsx语法，必须在当前文件引入react，否则报错
  render() {
    // <div>react</div> 不是单纯的html标签，而是jsx语法
    // react中标签为大写字母开头就是组件，小写字母开头就是html标签
    return <div>react</div>;
  }
}

export default App;
