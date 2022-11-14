import React,{Component} from "react";

import Header from "./components/Header";
import List from "./components/List"
import Footer from "./components/Footer"
import  "./App.css";

// 组件外壳，可以挂载网页中其他组件
export default class App extends Component{

    //初始化状态
	state = {todos:[
		{id:'001',name:'吃饭',done:true},
		{id:'002',name:'睡觉',done:true},
		{id:'003',name:'打代码',done:false},
		{id:'004',name:'逛街',done:false}
	]}
    
    // 添加一个todo任务
    addTodo = (todoObj)=>{
        const {todos} =  this.state;
        const newTodos = [todoObj,...todos];
        this.setState({todos:newTodos});
    }
    // 用于更新一个todo对象
    updateTodo = (id,done)=>{
        // 获取state中的todos
        const {todos} = this.state;
        // 获取处理后的newTodos
        const newTodos = todos.map(todoObj=>{
            // 根据id值判断是处理哪条数据
            if (todoObj.id === id) return {...todoObj,done};
            else return todoObj;
        })
        // 改变todos的值
        this.setState({todos:newTodos})
    }
    // 删除一条todo数据
    deleteTodo = (id)=>{
        // 获取state中的todos
        const {todos} = this.state;
        const newTodos = todos.filter(todoObj=> todoObj.id !== id)
        this.setState({todos:newTodos});
    }
    // 全选全不选框，勾选则全选，不勾选则全不选
    checkAllTodo = (done) => {
        const {todos} = this.state;
        // 如果flag等于true，那么todo的done属性为true
        const newTodos = todos.map(todoObj => {
            return {...todoObj,done}  // 解构出所有属性，并替换所有done值
        }) 
        this.setState({todos:newTodos});
    }
    // 删除已完成任务
    clearAllDone = ()=>{
        const {todos} = this.state;
        const newTodos = todos.filter(todoObj => !todoObj.done)
        console.log(newTodos);
        this.setState({todos:newTodos});
    }
    render(){
        // 解构出todos数组
        const {todos} = this.state
        // 数据的传输通过props属性进行传递
        return (
            <div className="todo-container">
				<div className="todo-wrap">
					{/* 这里是进行挂载的组件 */}
                    <Header addTodo = {this.addTodo} />
                    <List todos = {todos} updateTodo = {this.updateTodo} deleteTodo = {this.deleteTodo} />
                    <Footer todos = {this.state.todos} checkAllTodo = {this.checkAllTodo} clearAllDone = {this.clearAllDone}/>
				</div>
			</div>
        )     
    }
}