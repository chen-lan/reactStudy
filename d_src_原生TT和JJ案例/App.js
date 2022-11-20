import React, { Component } from 'react'
import TT from './components/TT'
import JJ from './components/JJ'
import withPosition from './Far'
const WithTT = withPosition(TT)
const WithJJ = withPosition(JJ)
export default class App extends Component {
  render() {
    return (
      <div>
        <WithTT></WithTT>
        <WithJJ></WithJJ>
      </div>
    )
  }
}
