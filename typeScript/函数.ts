// 不加类型，ts自动推断：function total(x: any, y: any): void
function total(x,y){

}
// 函数表达式方式
const mytotal = function (x,y) {
    
}

function total2(x:number,y:number):number {
    return x + y;
}
// 不常用  const total3: (x:number,y:number)=>void  定义函数参数类型和返回值
const total3: (x:number,y:number)=>void = function(x:number,y:number):void{

}

// 用接口定义函数
interface Itotal{
    (x:number,y:number):number;
}

const total4:Itotal = function(x,y){
    return x + y;
}

// 可选参数
function buildName(firstName: string, lastName?: string): string{
    if (lastName) {
        return firstName + " " + lastName;
    } else {
        return lastName;
    }
}

const tomcat = buildName("Tom","Cat");
const tom1 = buildName("Tom")

// 参数默认值
function defaultName(firstName: string = "Tom", lastName: string): string{
    return firstName + " " + lastName;
}
const tomcat2 = defaultName("Tom", "Cat");
const tomcat3 = defaultName(undefined, "Cat");

/**
 * ES6写法：
 * function push(array, ...items) {
    items.forEach(function(item) {
        array.push(item);
    });
    }


push([], 1, 2, 3);
 */
// 剩余参数  ...rest,any[]：内容为任意数值
function restfn(array: number[], ...items: number[]) {
    items.forEach((item)=>{
        array.push(item);
    })
}

restfn([1,2,3],4,5,6);

// 重载，例子：反转
function reserve(x: number): number;
function reserve(x: string): string; 

function reserve(x: number | string): number | string {
    if (typeof x === "number") {
        return Number(x.toString().split("").reverse().join(""));
    } else if(typeof x === "string"){
        return x.split("").reverse().join("");
    }
}

reserve(123456);

