/* 
    slice是reducer和action的集合体
*/
import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
	name: "xxx", //slice的名字
	initialState: {
		count: 0,
		msg: "reduxjs/toolkit",
	},
	reducers: {
		// 函数add简写
		add(state, action) {
			// 这个state不是真实store的数据，而是store数据的代理，所以可以直接修改
			console.log(state);
			state.count = state.count + action.payload;
		},
	},
});

export default countSlice;
