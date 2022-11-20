import React, { Component } from 'react'
import url from '../assets/dog.gif'

export default class TT extends Component {
  render() {
    let { x, y } = this.props
    x += 200
    y -= 50
    return (
      <div>
        <img
          src={url}
          alt=""
          style={{ position: 'absolute', left: x, top: y }}
        />
      </div>
    )
  }
}
