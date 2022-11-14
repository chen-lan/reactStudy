import React,{Component} from "react";
import "./index.css"

export default class Footer extends Component{

    // 点击复选框则全选上，不勾那么就是全不选
    handleCheckAll = (event) => {
        this.props.checkAllTodo( event.target.checked)
    }

    handleClearAllDone = ()=>{
        this.props.clearAllDone()
    }

    render(){
        // let doneCount = 0;
        const {todos} = this.props;
        // todos.forEach(todoObj => {
        //     if (todoObj.done === true) {
        //         doneCount++
        //     }
        // });
        // 使用reduce函数
        const doneCount = todos.reduce((pre,todoObj)=> pre + (todoObj.done ? 1 : 0),0)

        return (
            <div className="todo-footer">
                <label>
                    {/* 如果全选，那么checkbox的checked=true */}
                <input type="checkbox" onChange={this.handleCheckAll} checked = {doneCount && todos.length  ? true : false} />
                </label>
                <span>
                <span>{doneCount}</span> / {todos.length}
                </span>
                <button className="btn btn-danger" onClick={this.handleClearAllDone}>清除已完成任务</button>
            </div>
        )
    }
}