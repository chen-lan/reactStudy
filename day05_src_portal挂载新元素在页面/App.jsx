import React, { Component,Fragment } from 'react'
import Text from "./components/Text"
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
        <Text></Text>
      </Fragment>
      
    )
  }
}
