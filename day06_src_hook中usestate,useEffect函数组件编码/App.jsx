import React, { useState, useEffect } from "react";
import PubSub from "pubsub-js";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Footer from "./components/Footer/Footer";
import Item from "./components/Item/Item";
import context from "./js/context.js"
import "./App.css";
export default function App() {
	// 对于使用useState设置state属性值，解构出来也因是相应的值
	// const [todos,setTodos] = useState([
	// 	{ id: 1, todoName: "吃早餐", isDone: false },
	// 	{ id: 2, todoName: "敲代码", isDone: true },
	// 	{ id: 3, todoName: "睡觉", isDone: false },
	// ])
	const [todos,setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])
	const [id,setId] = useState(undefined);

	// 利用useEffect进行模拟组件生命周期，挂载或更新、卸载过来
	useEffect(()=>{
		// 任务选中
		const checkedTodoId = PubSub.subscribe("checkedTodo",(topic,id)=>{
			setTodos((todos)=>{
				// 根据id修改isDone的值
				const newTodos = todos.map((todo)=>{
					if(todo.id === id) todo.isDone =  !todo.isDone;
					return todo;
				})
				// 返回给setTodos设置状态值
				return newTodos;
			})
		})
		// 删除任务
		const delTodoId = PubSub.subscribe("delTodo",(topic,id)=>{
			setTodos((todos)=>{
				const newTodos = todos.filter(todo=>todo.id !== id)
				return newTodos;
			})
		})
		// 修改编辑id值
		const editTodoId = PubSub.subscribe("editTodo",(topic,id)=>{
			setId(id);
		})
		// 修改todoName
		const editTodoNameId = PubSub.subscribe("editTodoName",(topic,arr)=>{
			const [id,todoName] = arr;
			setTodos((todos)=>{
				const newTodos = todos.map(todo=>{
					if(todo.id === id) todo.todoName = todoName;
					return todo;
				})
				return newTodos;
			})
			setId(undefined);
		})
		// 添加todo任务
		const addTodoId = PubSub.subscribe("addTodo",(topic,todoName)=>{
			setTodos((todos)=>{
				// 创建一个todo对象
				const todo = {
					id : todos.length ? todos[todos.length - 1].id + 1 : 1,
					todoName,
					isDone : false,
				}
				const newTodos = [...todos];
				newTodos.push(todo);
				return newTodos;
			})
		})
		// 全选任务名
		const isAllDoneId = PubSub.subscribe("isAllDone",(topic,isDone)=>{
			setTodos((todos)=>{
				const newTodos = todos.map(todo=>{
					if(todo.isDone !== isDone) todo.isDone = isDone;
					return todo;
				})
				return newTodos;
			})
		})
		return ()=>{
			PubSub.unsubscribe(checkedTodoId);
			PubSub.unsubscribe(delTodoId);
			PubSub.unsubscribe(editTodoId);
			PubSub.unsubscribe(editTodoNameId);
			PubSub.unsubscribe(addTodoId);
			PubSub.unsubscribe(isAllDoneId);
		}
	},[])
	// 删除已完成任务
	function delDoneTodo() {
		setTodos((todos)=>{
			const newTodos = todos.filter(todo=>!todo.isDone);
			return newTodos;
		})
	}
	localStorage.setItem("todos",JSON.stringify(todos));
	return (
		<context.Provider value = {id}>
			<div className="todo-container">
				<div className="todo-wrap">
					<Header></Header>
					<div>
						{/* 通过renderProps形式传递组件实例 */}
						{
							todos.length ?
								<List>
									{todos.map(todo => {
										return <Item key={todo.id} todo={todo}></Item>;
									})}
								</List> : 
								<p style = {{color:"red"}}>恭喜您已完成今天所有的任务，望您一直保持努力状态。</p>
						}
						
						<Footer todos = {todos} delDoneTodo = {delDoneTodo}></Footer>
					</div>
				</div>
			</div>
		</context.Provider>
	);
}
