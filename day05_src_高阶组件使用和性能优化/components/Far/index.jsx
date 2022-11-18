import React,{Component} from 'react'

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
