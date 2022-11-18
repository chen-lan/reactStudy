import React from "react";

// React.forwardRef(函数组件) 这样就解决了函数组件就可以获取到ref传过来的参数
export default React.forwardRef(function Text(props,ref) {
    console.log(props,ref);
    return (
      <div>
        <input type="text" ref={ref} />
      </div>
    )
  })