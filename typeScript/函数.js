// 不加类型，ts自动推断：function total(x: any, y: any): void
function total(x, y) {
}
// 函数表达式方式
var mytotal = function (x, y) {
};
function total2(x, y) {
    return x + y;
}
// 不常用  const total3: (x:number,y:number)=>void  定义函数参数类型和返回值
var total3 = function (x, y) {
};
var total4 = function (x, y) {
    return x + y;
};
// 可选参数
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return lastName;
    }
}
var tomcat = buildName("Tom", "Cat");
var tom1 = buildName("Tom");
// 参数默认值
function defaultName(firstName, lastName) {
    if (firstName === void 0) { firstName = "Tom"; }
    return firstName + " " + lastName;
}
var tomcat2 = defaultName("Tom", "Cat");
var tomcat3 = defaultName(undefined, "Cat");
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
function restfn(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
restfn([1, 2, 3], 4, 5, 6);
function reserve(x) {
    if (typeof x === "number") {
        return Number(x.toString().split("").reverse().join(""));
    }
    else if (typeof x === "string") {
        return x.split("").reverse().join("");
    }
}
reserve(123456);
