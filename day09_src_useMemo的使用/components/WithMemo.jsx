import { useState,useMemo } from "react";
export default function WithMemo() {
    const [count, setCount] = useState(1);
    const [val, setValue] = useState('');
    // Hook之useMemo的返回值是一个结果值，[count]意思是监听count的变化，才进行渲染
    const expensive = useMemo(() => {
        console.log('compute');
        let sum = 0;
        for (let i = 0; i < count * 100; i++) {
            sum += i;
        }
        return sum;
    }, [count]);
 
    return <div>
        <h4>{count}-{expensive}</h4>
        {val}
        <div>
            <button onClick={() => setCount(count + 1)}>+c1</button>
            <input value={val} onChange={event => setValue(event.target.value)}/>
        </div>
    </div>;
}