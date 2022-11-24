import React,{useState,useCallback} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { isDoneTodo,editTodoId,editTodoName, delTodo } from '../../redux/slice'
import './Item.css'
export default function Item(props) {
  const {todo:{id,todoName,isDone}} = props;
  const [TN,setTN] = useState(todoName);
  const editId = useSelector(state=>state.todoList.editId)
  const dispatch = useDispatch();
  function isDoneTodoHandle() {
    dispatch(isDoneTodo(id));
  }
  // 编辑todo的id
  function editTodoIdHandle() {
    dispatch(editTodoId( editId !== id ? id : undefined));
    setTN(todoName);
  }
  function saveTodoNameToTNHandle(e) {
    const todoName = e.target.value.trim();
    setTN(todoName);
  }
  // 编辑todoName
  function editTodoNameHandle(e) {
    if (TN && e.key === "Enter") {
      dispatch(editTodoName({id,TN}));
      dispatch(editTodoId(undefined))
    }
  }
  // 删除,useCallback返回值为一个函数
  const delTodoHandle = useCallback(()=>{
      dispatch(delTodo(id))
  },[])
  return (
    <li>
      {
        editId !== id ?
          <label>
            <input type="checkbox" checked={isDone?true:false} onChange={isDoneTodoHandle} />
            <span className={isDone?"done":""}>{TN}</span>
          </label> :
            <input type="text" value={TN} onChange = {saveTodoNameToTNHandle} onKeyUp = {editTodoNameHandle} />
      }
      <button className="btn btn-danger" onClick={delTodoHandle}>删除</button>
      <button className="btn btn-edit" onClick={editTodoIdHandle}>{editId !== id ? "编辑" : "取消"}</button>
    </li>
  )
}
