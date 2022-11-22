import { useSelector, useDispatch } from "react-redux";

/**
 * useSelector的作用：监听redux数据的变化并且过滤数据
 * useDispatch的作用：返回store.dispatch函数
 */
export default function Count(){
    // useSelector函数返回值就是回调函数中的返回值，也就是所过滤的数据
    const count = useSelector((state)=>{
        return state.count;
    })
    // 返回值是store.dispatch函数
    const dispatch = useDispatch();
    return (
        <div>
            Count
            {/* 显示redux的state数据 */}
            <p>{count}</p>
            {/* 点击+号按钮redux的state数据+1 */}
            <button onClick={()=>{
                dispatch({type:"add"})
            }}>+</button>
            {/* 点击-号按钮redux的state数据+1 */}
            <button onClick={()=>{
                dispatch({type:"sub"})
            }} >-</button>
        </div>
    )
}