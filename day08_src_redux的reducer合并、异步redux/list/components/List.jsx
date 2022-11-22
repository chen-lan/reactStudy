import { useSelector,useDispatch } from "react-redux"
import { addGameTitle } from "../redux/action";

export default function List() {
    // 获取redux中的state值
    const gameTitles = useSelector((state)=>{
        console.log(state);
        return state.gameTitles;
    })
    const dispatch = useDispatch();
    function addGameTitleHanddle() {
        // dispatch函数的参数是action对象
        dispatch(addGameTitle("王者荣耀"));
    }
    return (
        <div>
            List
            <ul>
                {
                    gameTitles.map(gameTitle=>{
                        console.log("gameTitle：",gameTitle);
                        return <li key={gameTitle.id}>{gameTitle.title}</li>
                    })
                }
            </ul>
            <button onClick={addGameTitleHanddle}>添加游戏名</button>
        </div>
    )
}