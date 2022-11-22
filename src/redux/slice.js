/* 
    slice是reducer和action的集合体
*/
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 创建异步对象，这个对象有两个作用：1、相当于一个异步action 2、可以监听返回的promise的状态
export const asyncCount = createAsyncThunk("yyy", () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(6);
		}, 2000);
	});
});

const countSlice = createSlice({
	name: "xxx",
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
	// 配置异步操作
	extraReducers(builder) {
		builder.addCase(asyncCount.pending, (state, action) => {
			console.log("异步开始了");
		});
		builder.addCase(asyncCount.fulfilled, (state, action) => {
			console.log("异步成功了");
			state.count = state.count + action.payload;
		});
		builder.addCase(asyncCount.rejected, (state, action) => {
			console.log("异步失败了");
		});
	},
});

export default countSlice;
// add通过导出的形式
// export const { add } = countSlice.actions;
