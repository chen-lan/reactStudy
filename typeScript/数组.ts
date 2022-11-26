const arr: number[] = [1,2,3,4];

interface Iarr{
    // 数组索引为number，值为string类型
    [index:number]: string
}
// 接口形式
const arr2:Iarr = ["1","2"]

interface Ianimal{
    name: string;
    age: number;
}
// 描述数组中存储是一个对象
const result: Ianimal[] = [
    { name:"旺财",age: 18 },
    { name:"喵喵",age: 20 }
]

// 数组泛型
const arr3: Array<number> = [1,23,56,8];

// 伪数组其实是一个对象，所以得用像对象一样，用接口的来定义
interface Iargs{
    [index:number]:any;
    length:number;
    callee:Function;
}

function sum(): void {
    const args:Iargs = arguments;
}

// 简写
function sum2(): void {
    const args:{
        [index:number]:any;
        length:number;
        callee:Function;
    } = arguments;
}