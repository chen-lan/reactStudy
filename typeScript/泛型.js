// 它可以创建一个指定长度的数组，同时将每一项都填充一个默认值：
// 使用泛型进行改造
function createArray(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
// 给泛型指定为number类型
createArray(3, 0);
// 多个类型参数
function swap(tuple) {
    return [tuple[0], tuple[1]];
}
swap([5, "five"]);
