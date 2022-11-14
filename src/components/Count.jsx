import React,{Component} from "react";

export default class Count extends Component{
    constructor(){
        super();
        this.state = {
            count:0,
        }
        // 将原型上的addCount函数的this指向绑定为类实例，并返回的函数赋值给类的实例上
        // this.addCount = this.addCount.bind(this);
    }
    // ===========================================================================================
    // addCount是写在原型上的，普通函数存在this指向问题，箭头函数才没有箭头指向，
    // 此处，由于将jsx代码交给babel编译，开启严格模式，所以当前this指向undefined
    addCount(){
        this.setState({
            count: this.state.count + 1
        })
    }
    // ============================================================================================
    // 构造器的简写方式，同样是写在类的实例上(推荐使用1)
    // state = {
    //     count:0,
    // }
    // addCount = ()=>{
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }
    render(){
        // 普通函数存在this指向问题，箭头函数才没有箭头指向，此处，由于将jsx代码交给babel编译，开启严格模式，所以当前this指向undefined(不推荐使用)
        // const addCount = ()=>{
        //     this.setState({
        //         count: this.state.count + 1
        //     })
        // }
        return (
            <div>
                <span>{this.state.count}</span>
                <br/>
                {/* 由于箭头函数无this指向，所以想外的render函数查找，render函数this指向的是类的实例对象 */}
                {/* <button onClick={()=>this.addCount()}> + </button> */}
                <button onClick={()=>this.addCount()}> + </button>
            </div>
        )
    }
}