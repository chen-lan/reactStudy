import React, { Component } from 'react'

export default class Register extends Component {
  render() {
    const {userName,password,rePassword,handle} = this.props
    return (
      <div>
        用户名：   <input type="text" placeholder='请输入用户名' value={userName} onChange={handle("userName")} /> <br/>
        密　码:　  <input type="text" placeholder='请输入密码' value={password} onChange={handle("password")} /> <br/>
        确定密码:　<input type="text" placeholder='请输入密码' value={rePassword} onChange={handle("rePassword")} /> 
      </div>
    )
  }
}
