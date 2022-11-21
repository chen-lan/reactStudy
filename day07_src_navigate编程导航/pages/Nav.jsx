import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Nav() {
  const navigate = useNavigate();
  function navigateHandle(){
    setTimeout(() => {
      // navigate("/about"[配置对象])
      navigate("/about/123") //可以在后面传参
    }, 2000);
  }
  return (
    <div>
      Nav
      <button onClick={navigateHandle}>navigate导航编程</button>
    </div>
  )
}
