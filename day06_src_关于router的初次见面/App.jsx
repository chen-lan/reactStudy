import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'

// 引入routes,route，routes包裹着route

export default function App() {
  return (
	<div>
		<h3>练习路由变化</h3>
		<hr />
		<Link to = "/home">首页</Link> 
		<Link to = "/about">关于</Link>
		<hr />
		<Routes>
			<Route path = "/home" element = {<Home></Home>} />
			<Route path = "/about" element = {<About></About>} />
		</Routes>
	</div>
  )
}
