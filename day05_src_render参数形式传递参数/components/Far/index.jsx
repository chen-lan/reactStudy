import React,{Component} from 'react'

export default class Far extends Component{
    /**
     * 缺点：react-del-tool开发工具中对应组件名称没法改过来
     */
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
        // 接收参数render进行调用
        return this.props.children(this.state,this.handle)
    }
}
