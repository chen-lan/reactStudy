import React, { Component } from 'react'
import PubSub from 'pubsub-js';
import context from '../../js/context';
import './Item.css'
export default class Item extends Component {
  state = {
    TN:"",
  }
  // 选中任务复选框
  checkboxHandle = (e)=>{
    const {id} = this.props.todo;
    PubSub.publish("isDone",id);
  }
  // 删除一条todo任务
  delHandle = ()=>{
    const {id} = this.props.todo;
    PubSub.publish("delTodo",id);
  }
  // 改变todoName名称
  editTnHandle = (e)=>{
    if(e.key !== "Enter") return
    const todoName = this.state.TN;
    const {id} = this.props.todo;
    PubSub.publish("editTodoName",[todoName,id])
  }
  render() {
    const {
      todo:{id,todoName,isDone},
    } = this.props;
    return (
      <context.Consumer>
        {
          (editId)=>{
            return (
              <li>
                {
                  editId !== id ?
                    <label>
                    <input type="checkbox" checked = {isDone} onChange = {this.checkboxHandle} />
                    <span className={isDone ? "done" : ""}>{todoName}</span>
                    </label>:
                    <input type="text" value={this.state.TN} onChange = {(e)=>{this.setState({TN:e.target.value})}} onKeyUp={this.editTnHandle} />
                }
                <button className="btn btn-danger" onClick={this.delHandle}>删除</button>
                <button className="btn btn-edit" 
                        onClick={
                          ()=>{
                            this.setState({TN:todoName});
                            PubSub.publish("editTodo",editId !== id ? id : undefined);
                          }} >{editId === id ? "取消" : "编辑"}</button>
              </li>
            )
          }
        }
      </context.Consumer>
    )
  }
}
