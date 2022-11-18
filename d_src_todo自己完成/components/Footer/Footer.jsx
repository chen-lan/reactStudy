import React, { Component } from 'react'
import PubSub from 'pubsub-js';
import './Footer.css'
export default class Footer extends Component {
  checkHandle = (e)=>{
    const isAllDone = e.target.checked;
    PubSub.publish("isAllDone",isAllDone);
  }
  delDoneTodosHandle = (e)=>{
    this.props.delDoneTodos();
  }
  render() {
    const {todos} = this.props;
    const todosCount = todos.length;
    const todosDoneCount = todos.filter(todo=>todo.isDone).length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={todosCount === todosDoneCount && todosDoneCount} onChange={this.checkHandle}/>
        </label>
        <span>
          <span>已完成 {todosDoneCount}</span> / 全部 {todosCount}
        </span>
        <button className="btn btn-danger" onClick={this.delDoneTodosHandle}>清除已完成任务</button>
      </div>
    )
  }
}
