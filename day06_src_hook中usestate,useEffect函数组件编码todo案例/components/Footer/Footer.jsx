import React from 'react'
import PubSub from 'pubsub-js';
import './Footer.css'
export default function Footer(props) {
  const {todos,delDoneTodo} = props;
  // const {id,todoName,isDone} = todos;
  const isDoneTodos = todos.filter(todo => todo.isDone).length 
  function isAllCheckHandle(e) {
    PubSub.publish("isAllDone",e.target.checked);
  }
  function delDoneTodoHandle() {
    delDoneTodo();
  }
  return (
    <div className="todo-footer">
      <label>
        <input type="checkbox" checked = {isDoneTodos === todos.length ? true : false} onChange = {isAllCheckHandle} />
      </label>
      <span>
        <span>已完成 {isDoneTodos}</span> / 全部 {todos.length}
      </span>
      <button className="btn btn-danger" onClick={delDoneTodoHandle} >清除已完成任务</button>
    </div>
  )
}
