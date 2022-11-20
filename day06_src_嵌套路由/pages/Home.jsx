import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      {/* 被嵌套路由应当写在父路由组件上 */}
      <Link to = "/home/search" >Search</Link> &nbsp;
      <Link to = "/home/Nav" >Nav</Link>
      <hr />
      {/* outLet是将被嵌套路由输出，也是被显示的位置 */}
        <Outlet></Outlet>
      <hr />
    </div>
  )
}
