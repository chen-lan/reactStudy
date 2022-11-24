/* 
    配置store
*/
import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./slice";

const store = configureStore({
	reducer: {
		countReducer: countSlice.reducer, //就是自动生成reducer函数,countReducer为数据名称
	},
});
export default store;
