import React, { Component } from "react";
import PubSub from "pubsub-js";

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";
import "./App.css";
import context from "./js/context";
export default class App extends Component {
	// 状态提升: 把多个组件要用的数据,写在他们公共的父组件上面
	state = {
		todos: JSON.parse(localStorage.getItem("todos")) || [],
		id: undefined,
	};

	// 组件挂载完成,将componentDidMount原型上
	componentDidMount() {
		this.addTodoId = PubSub.subscribe("addTodo",(topic,todoName)=>{
			const { todos } = this.state;
			// 生成需要添加的对象
			const todo = {
				id: Date.now(),
				todoName: todoName,
				isDone: false,
			};
			// 将新对象添加到数组中
			const newTodos = [...todos, todo];
			this.setState({ todos: newTodos });
		})
		this.updateTodoId = PubSub.subscribe("updateTodo",(topic,id)=>{
			const {todos} = this.state;
			const newTodos = todos.map(todo=>{
				if(todo.id === id) todo.isDone = !todo.isDone
				return todo;
			})
			this.setState({todos:newTodos})
		})
		this.delTodoId = PubSub.subscribe("delTodo",(topic,id)=>{
			const {todos} = this.state;
			const newTodos = todos.filter(todo=>{
				return !(todo.id === id);
			})
			this.setState({todos:newTodos})
		})
		this.allCheckTodosId = PubSub.subscribe("allCheckTodos",(topic,isDone)=>{
			const {todos} = this.state;
			const newTodos = todos.map(todo=>{
				todo.isDone = isDone;
				return todo;
			})
			this.setState({todos:newTodos})
		})
		this.editTodoId = PubSub.subscribe("editTodoId",(topic,id)=>{
			this.setState({
				id,
			})
		})
		this.updateTodoNameId = PubSub.subscribe("updateTodoName",(topic,tN)=>{
			// 获取当前组件id值
			const {id,todos} = this.state;
			const newTodos = todos.map(todo=>{
				if(todo.id === id) todo.todoName = tN;
				return todo;
			})
			// 将id值改为id值，进行全部渲染
			this.setState({todos:newTodos,id:undefined})
		})
		// ===========================================
		// 发布消息
		// PubSub.publish("todos",this.state.todos);
	}
	// 组件即将卸载
	componentWillUnmount() {
		PubSub.unsubscribe(this.addTodoId)
		PubSub.unsubscribe(this.updateTodoId)
		PubSub.unsubscribe(this.delTodoId)
		PubSub.unsubscribe(this.allCheckTodosId)
		PubSub.unsubscribe(this.editTodoId)
		PubSub.unsubscribe(this.updateTodoNameId)
	}
	
	// 清除已完成任务
	clearDoneTodos = ()=>{
		const {todos} = this.state;
		const newTodos = todos.filter(todo=>{
			return !todo.isDone;
		})
		this.setState({todos:newTodos})
	}
	// 接收item当前组件id，修改App组件id
	render() {
		const { todos } = this.state;
		// 将数据存储在浏览器localStorage中
		localStorage.setItem("todos",JSON.stringify(todos));
		return (
			<context.Provider value={this.state}>
				<div className="todo-container">
				<div className="todo-wrap">
					<Header></Header>
					<div>
						<List></List>
						{
							todos.length ? <Footer clearDoneTodos = {this.clearDoneTodos}></Footer> : <p>恭喜您都完成任务了....</p>
						
						}
						
					</div>
				</div>
			</div>
			</context.Provider>
		);
	}
}
