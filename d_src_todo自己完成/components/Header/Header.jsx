import React, { Component } from 'react'
import PubSub from 'pubsub-js';
import './Header.css'
export default class Header extends Component {
  addTodoHandle = (e)=>{
    if(e.target.value === "" || e.key !== "Enter") return;
    const todoName = e.target.value;
    const id = Date.now();
    const isDone = false;
    const todo = {id,todoName,isDone}
    PubSub.publish("addTodo",todo);
    e.target.value = "";
  }
  render() {
    return (
      <div className="todo-header">
        <input type="text" onKeyUp={this.addTodoHandle} />
      </div>
    )
  }
}
