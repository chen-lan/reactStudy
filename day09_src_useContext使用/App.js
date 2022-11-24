import React from 'react'
import context from './context'
import Test from './Test'
export default function App() {
  return (
    <context.Provider value={[1, 2]}>
      <Test></Test>
    </context.Provider>
  )
}
