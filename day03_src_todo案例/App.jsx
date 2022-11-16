import React, { Component } from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";
import "./App.css";
export default class App extends Component {
	// 状态提升: 把多个组件要用的数据,写在他们公共的父组件上面
	state = {
		todos: JSON.parse(localStorage.getItem("todos")) || [],
		id: undefined,
	};

	addTodo = todoName => {
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
	};
	// 修改todo状态
	updateTodo = id=>{
		const {todos} = this.state;
		const newTodos = todos.map(todo=>{
			if(todo.id === id) todo.isDone = !todo.isDone
			return todo;
		})
		this.setState({todos:newTodos})
	}
	// 删除
	delTodo = id=>{
		const {todos} = this.state;
		const newTodos = todos.filter(todo=>{
			return !(todo.id === id);
		})
		this.setState({todos:newTodos})
	}
	// 全选
	allCheckTodos = isDone =>{
		const {todos} = this.state;
		const newTodos = todos.map(todo=>{
			todo.isDone = isDone;
			return todo;
		})
		this.setState({todos:newTodos})
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
	editTodoId = (id)=>{
		this.setState({
			id,
		})
	}
	updateTodoName = (tN)=>{
		// 获取当前组件id值
		const {id,todos} = this.state;
		const newTodos = todos.map(todo=>{
			if(todo.id === id) todo.todoName = tN;
			return todo;
		})
		// 将id值改为id值，进行全部渲染
		this.setState({todos:newTodos,id:undefined})
	}
	render() {
		const { todos, id } = this.state;
		// 将数据存储在浏览器localStorage中
		localStorage.setItem("todos",JSON.stringify(todos));
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Header addTodo={this.addTodo}></Header>
					<div>
						<List todos={todos} updateTodo = {this.updateTodo} delTodo = {this.delTodo} id = {id} editTodoId = {this.editTodoId} updateTodoName = {this.updateTodoName}></List>
						{
							todos.length ? <Footer todos={todos} allCheckTodos={this.allCheckTodos} clearDoneTodos = {this.clearDoneTodos}></Footer> : <p>恭喜您都完成任务了....</p>
						
						}
						
					</div>
				</div>
			</div>
		);
	}
}
