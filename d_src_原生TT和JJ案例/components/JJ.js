import React, { Component } from 'react'
import url from '../assets/cat.gif'

export default class JJ extends Component {
 

  render() {
    let { x, y } = this.props
    return (
      <div>
        <img
          src={url}
          alt=""
          style={{ position: 'absolute', left: x, top: y, width: 100 }}
        />
      </div>
    )
  }
}
