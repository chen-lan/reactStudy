import React,{Component} from 'react'

/* 
    作用：高阶组件主要用来封装共同逻辑和状态的，比如下面案例的登录和注册功能，
        都用到useName和password这两个状态值，所以封装一个高阶组件
*/
export default function withFar(Comp) {
    // 高阶组件，类似于高阶函数
  return class Far extends Component{
    // 修改react_dev_tool开发工具的类名
    static displayName = "With" + Comp.name;
    state = {
        userName:"",
        password:"",
        rePassword:"",
    }

    handle = (name)=> (e)=>{
        this.setState({
            [name]:e.target.value.trim(),
        })
    }
    render(){
        return <Comp {...this.state} handle = {this.handle}></Comp>
    }
  }
}
