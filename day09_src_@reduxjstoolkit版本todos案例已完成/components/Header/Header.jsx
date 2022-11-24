import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addAsyncTodo } from '../../redux/slice'
import './Header.css'
export default function Header() {
  const todos = useSelector((state)=>{
    return state.todoList.todos;
  })
  const loading = useSelector((state)=>{
    return state.todoList.loading;
  })
  const dispatch = useDispatch();
  function addTodoHandle(e) {
    // 将新添加的todo传给reducer
    const todoName = e.target.value.trim();
    const id = todos[todos.length - 1].id + 1;
    const todo = {id,todoName,isDone:false}
    if (todoName && e.key === "Enter") {
      dispatch(addAsyncTodo(todo));
      e.target.value = "";
    }
  }
  return (
    <div className="todo-header">
      <input type="text" onKeyUp={addTodoHandle} />
      {
        loading ?
          <div style={{color:"red",fontSize:20}}>正在添加数据，请稍等...</div>
        : ""
      }
    </div>
  )
}
