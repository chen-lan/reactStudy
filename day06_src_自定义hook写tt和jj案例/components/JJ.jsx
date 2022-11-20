import React from 'react'
import usePosition from '../usePosition'
import url from '../assets/cat.gif'

export default function JJ () {
    // 调用函数，获取鼠标实时位置
    const {x,y} = usePosition();

    return (
      <div>
        <img
          src={url}
          alt=""
          style={{ position: 'absolute', left: x, top: y, width: 100 }}
        />
      </div>
    )
  }
