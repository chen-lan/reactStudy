/**
 * props
 *  作用：把父组件里面的数据传递给子组件，但是是单向不可逆的（只能由父==>子）
 *  接收：
 *      1、类组件：this.props
 *      2、函数组件：形参 props
 * props的注意点：
 *      1、props 的数据是只读的，不能修改
 *      2、props 可以传递任意类型的数据
 *      3、构造器无法直接获取props的值，如果想要获取，必须同过形参props方式并且super(props)
 * props 批量传递数据方式：{...this.state}
 */
 import React,{Component} from "react";

 export default class Textprops extends Component{
     // 类组件必须有个render函数和有返回值，返回值是写jsx代码
     render(){
         console.log(this.props.userName);
         return (
             <div>
                 {this.props.userName}
                 {/* 接收传过来的组件,本质是要保证组件的渲染<Demo/>格式正确即可 */}
                 <this.props.Demo></this.props.Demo>
                 {/* 渲染虚拟dom，直接插值表达式渲染 */}
                 {this.props.h1}
                 <hr></hr>
                 {this.props.Demo2}
             </div>
         )
     }
 }
 
 export function Fntextprops(props) {
     console.log(props.userName);
     return (
         <div>
             {props.userName}
             {props.Demo}
         </div>
     )
 }