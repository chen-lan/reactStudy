import React from 'react'
import PubSub from 'pubsub-js';
import context from '../../js/context';
import { useState } from 'react';
import './Item.css'
export default function Item(props) {
  const {todo:{id,todoName,isDone}} = props;
  const [TN,setTN] = useState(todoName);
  // 选中（完成）任务
  function checkedHanddle(e){
    PubSub.publish("checkedTodo",id);
  }
  // 删除任务
  function delHandle() {
    PubSub.publish("delTodo",id);
  }
  function editHandle(editId) {
    // 将idz值传给App组件，修改App中的id值
    PubSub.publish("editTodo", editId !== id ? id : undefined);
    // 取消将状态恢复原始数据
    if(editId === id) {
      setTN((TN)=>{
        TN = todoName;
        return TN;
      });
    }
  }
  function editTodoHandle(e){
    const todoName = e.target.value;
    setTN((TN)=>{
      TN = todoName;
      return TN;
    });
  }
  function editTodoNameHandle(e){
    if(e.key !== "Enter") return;
    PubSub.publish("editTodoName",[id,TN]);
  }
  return (
    <context.Consumer>
      {
        (editId)=>{
          // 回调函数中返回值写jsx代码
          return (
            <li>
              {
                editId !== id ?
                  <label>
                    <input type="checkbox" checked = {isDone} onChange={checkedHanddle} />
                    <span className={isDone ? "done" : ""}>{todoName}</span>
                  </label>:
                  <input type="text" value={TN} onChange = {editTodoHandle} onKeyUp = {editTodoNameHandle} />
              }
              <button className="btn btn-danger" onClick={delHandle}>删除</button>
              <button className="btn btn-edit" onClick={()=>{editHandle(editId)}} >{editId === id ? "取消" : "编辑"}</button>
          </li>
          )
        }
      }
      
    </context.Consumer>
    
  )
}
