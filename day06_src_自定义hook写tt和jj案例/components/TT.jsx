import React from 'react'
import url from '../assets/dog.gif'
import usePosition from '../usePosition'

export default function TT () {
    let {x,y} = usePosition();
    x += 200
    y -= 50
    return (
      <div>
        <img
          src={url}
          alt=""
          style={{ position: 'absolute', left: x, top: y }}
        />
      </div>
    )
}
