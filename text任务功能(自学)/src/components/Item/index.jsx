import React,{Component} from "react";
import "./index.css"

export default class Item extends Component{
    state = {mouse:false} //标识鼠标移入、移出

    // 注意：组件传参是通过props，那么该组件全部作用域都能获取得到传过来的props参数值
    // handleCheck函数处理复选框的选中状态
    handleCheck=(id)=>{
        return (event)=>{
            const {checked} = event.target
            // 当触发onChange方法时，调用的回调函数，获取到的check的值传回App组件修改state的值
            this.props.updateTodo(id,checked);
        }
    }
    // 鼠标移入移出高亮显示
    handleMouse(flag){
        return ()=>{
            this.setState({mouse:flag})
        }
    }
    // 删除一个todo数据
    handleDelete(id){
        return ()=>{
            this.props.deleteTodo(id);
        }
    }
    render(){
        const {id,name,done} = this.props.item;
        const {mouse} = this.state
        return (
            <li style={{backgroundColor: mouse ? "#ddd" : "#fff"}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    {/* defaultChecked只会检查第一次check的值，以后改动就不会跟着变动 */}
                    <input type="checkbox" checked = {done} onChange = {this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{display: mouse ? "block" : "none"}} onClick = {this.handleDelete(id)}>删除</button>
            </li>
        )
    }
}