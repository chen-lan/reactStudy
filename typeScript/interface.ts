interface Iperson{
    name: string;
    age: number;
    gender: boolean;
    // [any: string]: any;  //任意数据类型，并且any为其他属性父类 ,一个接口只能定义一个任意类型
    [any: string]: string | number | boolean;
}

const tom: Iperson = {name:"tom",age:18,gender:false,address:"深圳"};
// 接口简写

const jerry: {name: string,age: number} = {name:"jerry",age:18} 