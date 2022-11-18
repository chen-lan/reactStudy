import React, { Component,Fragment } from 'react'

import ShouldComponentUpdate from './components/ShouldComponentUpdate';
import withFar from './components/Far';
import Login from './components/Login';
import Register from './components/Register';

const WithLogin = withFar(Login)
const WithRegister = withFar(Register)
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
        <button onClick={()=>this.setState({count:1})}>
          点击加1
        </button>
        <div>App...</div>
        <ShouldComponentUpdate count = {this.state.count} />
        <hr />
        <WithLogin />
        <hr />
        <WithRegister />
      </Fragment>
      
    )
  }
}
