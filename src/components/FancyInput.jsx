import React, { useRef, useImperativeHandle, forwardRef } from 'react'
export default forwardRef(
    function FancyInput(props,ref) {
        // 创建useRef的hook对象
        const inputRef = useRef()
        // 自定义暴露给父组件的实例值. `useImperativeHandle` 应当与 [`forwardRef`]一起使用
        useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus()
        },
        }))
        // 与input标签绑定
        return <input ref={inputRef} />
    })
    