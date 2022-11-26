/**
 * 类型别名：用来给一个类型七个新名字，类型别名常用于联合类型
 */

type str = string;
type NameResolver = ()=> string;
type strOrNum = string | number;

function strornum(x: strOrNum) : strOrNum{
    return x;
}