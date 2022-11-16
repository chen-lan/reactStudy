import React, { Component } from 'react'

import './Footer.css'
export default class Footer extends Component {
  allCheckHandle = (e)=>{
    this.props.allCheckTodos(e.target.checked);
  }
  render() {
    const {todos} = this.props;
    const allTotal = todos.length
    const doneTodos = todos.filter(todo=>todo.isDone).length
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked = {(allTotal === doneTodos && allTotal) ? true : false} onChange={this.allCheckHandle} />
        </label>
        <span>
          <span>已完成 {doneTodos}</span> / 全部 {allTotal}
        </span>
        <button className="btn btn-danger" onClick={this.props.clearDoneTodos}>清除已完成任务</button>
      </div>
    )
  }
}
