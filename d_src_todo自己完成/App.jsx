import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import context from './js/context'
import './App.css'
export default class App extends Component {
  state = {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
    id:undefined,
  }
  // 利用消息订阅进行组件之间通讯，如果是父传子的参数通讯，可以利用props传递，这里方便很多
  // componentDidMount是挂载在原型上
  componentDidMount(){
    this.isDoneId = PubSub.subscribe("isDone",(topic,id)=>{
      const {todos} = this.state;
      const newTodos = todos.map(todo=>{
        if(todo.id === id) todo.isDone = !todo.isDone;
        return todo;
      })
      this.setState({todos:newTodos})
    }
    )
    this.delTodoId = PubSub.subscribe("delTodo",(topic,id)=>{
      const {todos} = this.state;
      const newTodos = todos.filter(todo=>todo.id !== id);
      this.setState({todos:newTodos});
    })
    this.editTodoId = PubSub.subscribe("editTodo",(topic,id)=>{
      this.setState({id})
    })
    this.editTodoNameId = PubSub.subscribe("editTodoName",(topic,array)=>{
      const {todos} = this.state;
      // 对象解构用对象{}符号；数组解构用数组[]解构
      const [todoName,id] = array;
      const newTodos = todos.map(todo=>{
        if(todo.id === id) todo.todoName = todoName;
        return todo;
      })
      this.setState({todos:newTodos,id:undefined})
    })
    this.addTodoId = PubSub.subscribe("addTodo",(topic,todo)=>{
      const {todos} = this.state;
      // push返回值是数组长度
      const newTodos = [...todos,todo];
      this.setState({todos:newTodos});
    })
    this.isAllDoneID = PubSub.subscribe("isAllDone",(topic,isAllDone)=>{
      const {todos} = this.state;
      const newTodos = todos.map((todo)=>{
        if(todo.isDone !== isAllDone) todo.isDone = isAllDone;
        return todo;
      })
      this.setState({todos:newTodos});
    })
  }
  componentWillUnmount(){
    PubSub.unsubscribe(this.isDoneId);
    PubSub.unsubscribe(this.delTodoId);
    PubSub.unsubscribe(this.editTodoId);
    PubSub.unsubscribe(this.editTodoNameId);
    PubSub.unsubscribe(this.addTodoId);
    PubSub.unsubscribe(this.isAllDoneID);
  }
  delDoneTodos = ()=>{
    const {todos} = this.state;
    const newTodos = todos.filter(todo=>!todo.isDone)
    this.setState({todos:newTodos});
  }
  render() {
    const {todos,id} = this.state;
    localStorage.setItem("todos", JSON.stringify(todos));
    return (
      <context.Provider value={id}>
        <div className="todo-container">
          <div className="todo-wrap">
            <Header></Header>
            <div>
              {
                todos.length ?
                  <List todos = {todos}></List>
                : <p style={{color:"red"}}>赞...，恭喜您完成所有的任务。</p>  
              }
              <Footer todos = {todos} delDoneTodos = {this.delDoneTodos}></Footer>
            </div>
          </div>
        </div>
      </context.Provider>
    )
  }
}
