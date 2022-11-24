import React, { useContext } from 'react'
import context from './context'
export default function Test() {
  const result = useContext(context)
  console.log(result)
  return <div>Test</div>
}
