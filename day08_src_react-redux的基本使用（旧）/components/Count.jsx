export default function Count(props){
    console.log(props);
    return (
        <div>
            Count
            {/* 显示redux的state数据 */}
            <p>{props.count}</p>
            {/* 点击+号按钮redux的state数据+1 */}
            <button onClick={()=>{
                props.dispatch({type:"add"})
            }}>+</button>
            {/* 点击-号按钮redux的state数据+1 */}
            <button onClick={()=>{
                props.dispatch({type:"sub"})
            }} >-</button>
        </div>
    )
}