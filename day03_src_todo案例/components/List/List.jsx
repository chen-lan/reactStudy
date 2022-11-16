import React, { Component } from 'react'
import Item from '../Item/Item'
import './List.css'
export default class List extends Component {
  render() {
    const { todos,updateTodo,delTodo,id,editTodoId,updateTodoName } = this.props
    return (
      <ul className="todo-main">
        {todos.map((item) => {
          return <Item key={item.id} todo={item} updateTodo = {updateTodo} delTodo = {delTodo} id = {id} editTodoId = {editTodoId} updateTodoName = {updateTodoName}></Item>
        })}
        {/* [<Item key={item.id} todo={{todoName:'吃饭'}}></Item>,<Item key={item.id} todo={{todoName:'睡觉'}}></Item>] */}
      </ul>
    )
  }
}
