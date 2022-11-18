import React, { Component } from 'react'
// 引入虚拟dom
import ReactDOM from "react-dom" //createPortal引入react-dom不需要加client

export default class Text extends Component {
    constructor(){
        super();
        // 创建真实dom元素节点
        this.aaa = document.createElement("div");
    }
  render() {
    return ReactDOM.createPortal(<div>Text</div>,this.aaa);
  }

  componentDidMount(){
    document.getElementById("xxx").appendChild(this.aaa);
  }
  componentWillUnmount(){
    document.getElementById("xxx").removeChild(this.aaa);
  }
}
