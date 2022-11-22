import React from 'react'
import { useParams } from 'react-router-dom'

export default function About() {
  const params = useParams(); //接收
  console.log(params);
  return (
    <div>About</div>
  )
}
