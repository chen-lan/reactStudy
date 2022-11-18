import React, { Component,PureComponent } from 'react'

export default class index extends PureComponent {
    state = {
      num:0,
    }

    /**
     * 性能优化方案
     * 1、用shouldComponentUpdate控制组件是否更新
     *  有两个参数：    
     *      nextProps 最新的参数
     *      nextState 最新的状态
     *  获取旧的参数
     *      this.props
     *      this.state
     * 2、利用pureComponent钩子函数自动处理，但是对于复杂类型会有点问题，因为复杂类型的地址值是不变的，导致更改属性值而不会发生更新渲染
     */ 
    // shouldComponentUpdate(nextProps,nextState){
    //   /**
    //    * return 布尔值
    //    *    true：表示更新的水闸是打开的，组件数据可以更新渲染
    //    *    false：表示更新的水闸是关闭的，组件数据阻断更新，不渲染，因为组件数据不发生改变，为了提高性能不会更新组件
    //    */
    //   console.log("新",nextProps.count);
    //   console.log("旧",this.props.count);
    //   return nextProps.count !== this.props.count || nextState.num !== this.state.num;
    // }
  render() {
    console.log("render函数执行了");
    const {num} = this.state;
    return (
      <div>
        {this.props.count}
        <hr/>
        <button onClick={()=>this.setState({num:num+1})}>state自增1</button>
        <span>{num}</span>
      </div>
    )
  }
}
