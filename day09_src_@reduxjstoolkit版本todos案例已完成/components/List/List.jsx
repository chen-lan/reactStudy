import React from 'react'
import { useSelector } from 'react-redux'
import Item from "../Item/Item"
import './List.css'
export default function List() {
  const todos = useSelector((state)=>{
    return state.todoList.todos;
  })
  return <ul className="todo-main">
    {
      todos.map((todo)=><Item key={todo.id} todo={todo}></Item>)
    }
  </ul>
}
