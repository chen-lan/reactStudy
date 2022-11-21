/**
 * 第一步：引入redux中的createStore对象，进行创建Store
 * 第二步：创建reducer函数，第一个参数为state，任意数值，一般使用对象，可以保存多个属性值，第二个参数为action
 * 第三步：将reducer函数作为createStore(reducer)参数传递
 */
const { createStore } = require("redux");

// 创建reducer函数，第一个参数为state，任意数值，一般使用对象，可以保存多个属性值，第二个参数为action,action传的是对象
// 初始化type值为没意义的一段字符串 type: '@@redux/INITk.t.t.o.4'
function reducer(state = { count: 0, msg: "哈哈哈" }, action) {
	console.log(state, action);
	switch (action.type) {
		case "add":
			// 此时可以写处理数据
			return {
				...state,
				count: state.count + 1,
			};
		case "sub":
			return {
				...state,
				count: state.count - 1,
			};
		default:
			return state;
	}
}
// 创建对象
const store = createStore(reducer);

store.subscribe(() => {
	console.log(store.getState());
});

// 分配任务
store.dispatch({ type: "add" });
store.dispatch({ type: "add" });
store.dispatch({ type: "sub" });
