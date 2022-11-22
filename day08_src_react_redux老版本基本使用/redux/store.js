import { createStore } from "redux";
import reducer from "./reducer"; //引入reducer函数

const store = createStore(reducer);
store.subscribe(() => {
	console.log("store的数据改变了", store.getState());
});
export default store;
