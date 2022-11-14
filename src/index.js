import React from "react";
import ReactDOM from "react-dom/client"; //react@18写法
// import ReactDOM from "react-dom";
import App from "./App";

// 渲染组件页面
// ReactDOM.render(<App />, document.getElementById("root"));  //react@16.8-17版的写法
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
