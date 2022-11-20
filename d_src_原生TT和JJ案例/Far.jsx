import React, { Component } from 'react'

export default function withPosition(Son) {
  return class Far extends Component {
    state = {
      x: 0,
      y: 0,
    }

    handleMove = (e) => {
      // console.log(e)
      this.setState({
        x: e.clientX,
        y: e.clientY,
      })
    }

    componentDidMount() {
      window.addEventListener('mousemove', this.handleMove)
    }

    componentWillUnmount() {
      window.removeEventListener('mousemove', this.handleMove)
    }
    render() {
      return <Son {...this.state} {...this.props}></Son>
    }
  }
}
