import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { isAllDone, delDoneTodos } from '../../redux/slice'
import './Footer.css'
export default function Footer() {
  const todos = useSelector((state)=>{
    return state.todoList.todos;
  })
  const dispatch = useDispatch();
  const todosLength = todos.length;
  const todoDonesLength = todos.filter(todo=> todo.isDone).length;
  const isAllDoneHandle = useCallback((e)=>{
    const isDone = e.target.checked;
    dispatch(isAllDone(isDone));
  })
  // 删除已完成的任务
  const delDoneTodosHandle = useCallback(()=>{
    dispatch(delDoneTodos());
  })
  return (
    <div className="todo-footer">
      <label>
        <input type="checkbox" checked = {todoDonesLength === todosLength ? true : false} onChange = {isAllDoneHandle} />
      </label>
      <span>
        <span>已完成 {todoDonesLength}</span> / 全部 {todosLength}
      </span>
      <button className="btn btn-danger" onClick={delDoneTodosHandle}>清除已完成任务</button>
    </div>
  )
}
