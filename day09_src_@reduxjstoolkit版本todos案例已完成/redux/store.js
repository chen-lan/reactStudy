/* 
    配置store
*/
import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slice";
const store = configureStore({
	// 自动生成reducer函数
	reducer: {
		todoList: todoSlice.reducer,
	},
});
store.subscribe(() => {
	localStorage.setItem("todos", JSON.stringify(store.getState().todoList.todos));
});
export default store;
