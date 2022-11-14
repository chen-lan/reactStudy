import React,{Component} from "react";
import { nanoid } from "nanoid";
import "./index.css"

export default class Header extends Component{

    handleKeyUp = (event)=>{
        if(event.keyCode !== 13) return; //回车键keyCode=13
        // 获取输入框输入的任务名称
        const taskName = event.target.value;
        // 准备好一个对象传给App组件更新状态
        const todoObj = {id:nanoid(),name:taskName,done:false};
        // 调用App组件的addTodo函数
        this.props.addTodo(todoObj);
    }
    // render渲染方法，主要是写jsx代码
    render(){
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}