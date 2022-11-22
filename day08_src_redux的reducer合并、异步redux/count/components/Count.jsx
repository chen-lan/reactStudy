import { useSelector, useDispatch } from "react-redux"
import { addAction,subAction,asyncAddAction } from "../redux/action";

export default function Count() {
    // useSelector是获取redux中的state数据
    const count = useSelector((state)=>{
        console.log("state：",state);
        console.log("state.countReducer.count",state.countReducer.count);
        return state.countReducer.count;
    })
    // 调用useDispatch()函数，返回值是store.dispatch()
    const dispatch = useDispatch();
    console.log("dispatch：",dispatch);
    // count求和
    function addHandle() {
        // dispatch()参数是一个action对象，用来提交更改需求
        dispatch(addAction(6))
    }
    // count减法
    function subHandle() {
        dispatch(subAction(3))
    }
    // 异步加法
    function asyncAddHandle() {
        dispatch(asyncAddAction(8))
    }
    console.log("=========",count);
    return (
        <div>
            Count组件
            <p>{count}</p>
            <button onClick={addHandle}>+</button>
            <button onClick={subHandle}>-</button>
            <button onClick={asyncAddHandle}>async异步+</button>
        </div>
    )
}