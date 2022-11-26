/**
 * 断言作用：对于任意类型变量使用时可以确定其类型，我们可以使用断言指定其特有的数据类型
 *          有利于我们编程时的数值提示和API的使用
 */

interface Icat{
    name: string;
    run(): void;
}

interface Ifish{
    name: string;
    swim(): void;
}

function isFish(animal: Icat | Ifish): boolean {
    // 加上断言，编辑器就有IFish的属性或者方法的提示
    if (typeof (animal as Ifish).swim === "function") {
        return true;
    }
    return false;
}

// 将一个父类断言为更加具体的子类

class ApiError extends Error{
    code: number = 0;
}

class HttpError extends Error{
    statusCode: number = 200;
}

function isApiError(error: Error) {
    if (typeof (error as ApiError).code === "number") {
        return true;
    }
    return false;
}