import React, { Component } from "react";
import PubSub from "pubsub-js";
import context from "../../js/context";
import "./Item.css";
export default class Item extends Component {
	// 初始化该组件的状态，用于记录任务名称
	state = {
		tN:"",
		flag: true,
	}
	// 更新任务状态
	updateHandle=()=>{
		// 通过id值修改app组件的状态
		// this.props.updateTodo(this.props.todo.id);
		PubSub.publish("updateTodo",this.props.todo.id);
	}
	// 根据id值删除任务
	delHandle = ()=>{
		// this.props.delTodo(this.props.todo.id);
		PubSub.publish("delTodo",this.props.todo.id);
	}
	// 获取当前组件的id值，传给App组件
	editHandle = ()=>{
		// 点击次数单数时，是编辑，偶数时是取消
		const {flag} = this.state;
		// 将todoName的值保存在状态中
		this.setState({tN:this.props.todo.todoName});
		// this.props.editTodoId(flag ? this.props.todo.id : undefined);
		PubSub.publish("editTodoId",flag ? this.props.todo.id : undefined)
		this.setState({flag:!flag})
	}
	updateTn = (e)=>{
		this.setState({tN:e.target.value.trim()});
	}
	updateTName = (e)=>{
		const {tN} = this.state;
		if (e.key !== "Enter") return;
		// this.props.updateTodoName(tN)
		PubSub.publish("updateTodoName",tN);
	}
	render() {
		const {
			todo: { todoName, id, isDone }
		} = this.props;
		const {tN} = this.state;
		return (
			<context.Consumer>
				{(obj)=>{
					const editid = obj.id;
					return (
						<li>
							{
								id !== editid ? 
								<label>
									<input type="checkbox" checked={isDone} onChange={this.updateHandle} />
									<span className={isDone ? "done" : ""}>{todoName}</span>
								</label>:
								<input type="text" value={tN} onChange = {this.updateTn} onKeyUp = {this.updateTName} />
							}
							<button className="btn btn-danger" onClick={this.delHandle}>删除</button>
							<button className="btn btn-edit" onClick={this.editHandle} >{id !== editid ? "编辑" : "取消"}</button>
						</li>
					)
				}}
			</context.Consumer>
			
		);
	}
}
