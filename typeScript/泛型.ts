// 它可以创建一个指定长度的数组，同时将每一项都填充一个默认值：
// 使用泛型进行改造
function createArray<T>(length: number,value: T): Array<T> {
    const result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
// 给泛型指定为number类型
createArray<number>(3,0)

// 多个类型参数(元组)

function swap<T,U>(tuple: [T,U]): [T,U] {
    return [tuple[0],tuple[1]];
}

swap([5,"five"]);

function createArray2<T>(length: number,value:T): Array<T> {
    const result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray2<string>(4,"er");

// 元组就是有多个泛型参数
function swap2<T,U>(tuple2: [T,U]): [U,T] {
    return [tuple2[1],tuple2[0]]
}

swap2<number,string>([7,"seven"]);