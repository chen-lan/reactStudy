import React, { Component,Fragment } from 'react'

import Far from './components/Far';
import Login from './components/Login';
import Register from './components/Register';

export default class App extends Component {

  state = {
    count:0,
  }
  
  render() {
    
    return (
      // fragment简写
      // <>
      //   <div>App...</div>
      // </>
      <Fragment>
        <div>App...</div>
        <hr />
        {/* 通过render参数，传递一个函数给far组件，far组件调用render函数
            将far组件的state值（实参）传递回App组件，由于render函数返回值
            是一个组件实例，因此组件挂载成功
        */}
        {/* <Far render = {(state,handle)=> <Login {...state} handle = {handle}></Login>}></Far> */}
        {/* 第二种写法 */}
        <Far>{(state,handle)=> <Login {...state} handle = {handle}></Login>}</Far>
        <hr />
        {/* <Far render = {(state,handle)=> <Register {...state} handle = {handle} ></Register>}></Far> */}
        <Far>{(state,handle)=> <Register {...state} handle = {handle} ></Register>}</Far>
      </Fragment>
      
    )
  }
}
