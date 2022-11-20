import React from 'react'
import PubSub from 'pubsub-js';
import './Header.css'
export default function Header() {

  function addHandle(e) {
    const todoName = e.target.value.trim();
    // 为空或者不是按回车键就return
    if(!todoName || e.key !== "Enter") return;
    PubSub.publish("addTodo",todoName);
    e.target.value = "";
  }
  return (
    <div className="todo-header">
      <input type="text" onKeyUp={addHandle}/>
    </div>
  )
}
