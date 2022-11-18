import React, { Component,Fragment } from 'react'
import Text from "./components/Text"

const xxxRef = React.createRef();
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
        {/* 通过ref传参数，函数组件不能获取得到的，因此引入forwardRef(函数组件)进行接收 */}
        <Text ref = {xxxRef}></Text>
        <button onClick = {()=>{xxxRef.current.focus()}}>获取Text的input框焦点</button>
      </Fragment>
      
    )
  }
}
