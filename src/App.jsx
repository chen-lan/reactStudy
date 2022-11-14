import React,{Component} from "react";

import Demo from "./components/Demo";
import Count from "./components/Count";
import Textprops,{Fntextprops} from "./components/Textprops";

// 组件外壳，可以挂载网页中其他组件
export default class App extends Component{
    state = {
        userName:"刘德华",
    }
    render(){
        return (
            <div id="box">
                {/* 一个组件就相当代表一个标签，所以都得有个根标签 */}
                <Demo></Demo>
                <hr/>
                <Count/>
                <Textprops userName={this.state.userName} Demo = {Demo} h1 = {<h1>哈哈哈</h1>}/>
                <Fntextprops userName={this.state.userName} Demo = {<Demo/>}/>
            </div>
            
        )     
    }
}