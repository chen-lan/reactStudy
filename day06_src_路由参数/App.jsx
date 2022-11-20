import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Search from './pages/Search'
import Nav from './pages/Nav'
import Foot from './pages/Foot'
// 引入routes,route，routes包裹着route

export default function App() {

  return (
	<div>
		<h3>练习路由变化</h3>
		<hr />
		{/* 注意此处不能将/去掉 */}
		<Link to = "/home">首页</Link> 
		<Link to = "/about">关于</Link>
		<hr />
		<Routes>
			{/* 嵌套路由 */}
			<Route path = "/home" element = {<Home></Home>} >
				<Route path='/home/search' element = {<Search></Search>}></Route>
				<Route path='/home/nav' element = {<Nav></Nav>}></Route>
			</Route>
			{/* 路由参数是带有参数是，才能将参数传递过来,路由的路径将会匹配相应的组件 */}
			<Route path = "about" >
				<Route path=":id" element = {<Foot></Foot>} ></Route>
				<Route path="" element = {<About></About>}></Route>
			</Route>
		</Routes>
	</div>
  )
}
