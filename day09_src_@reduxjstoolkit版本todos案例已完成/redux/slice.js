/* 
    创建切片
*/
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addAsyncTodo = createAsyncThunk("addTodo", () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, 1000);
	});
});

const todoSlice = createSlice({
	name: "todos",
	initialState: {
		todos: JSON.parse(localStorage.getItem("todos")) || [],
		loading: false,
		editId: undefined,
	},
	reducers: {
		// 这里写action逻辑和修改state，或者配置异步
		isDoneTodo(state, action) {
			state.todos.map(todo => {
				if (todo.id === action.payload) todo.isDone = !todo.isDone;
				return todo;
			});
		},
		// 修改editId值
		editTodoId(state, action) {
			state.editId = action.payload;
		},
		editTodoName(state, action) {
			const { id, TN } = action.payload;
			state.todos.forEach(todo => {
				if (todo.id === id) todo.todoName = TN;
			});
		},
		delTodo(state, action) {
			const newTodos = state.todos.filter(todo => todo.id !== action.payload);
			state.todos = [...newTodos];
		},
		isAllDone(state, action) {
			// console.log(action.payload);
			state.todos.forEach(todo => {
				if (todo.isDone !== action.payload) todo.isDone = action.payload;
			});
		},
		delDoneTodos(state, action) {
			const newTodos = state.todos.filter(todo => todo.isDone === false);
			state.todos = [...newTodos];
		},
	},
	extraReducers(builder) {
		builder.addCase(addAsyncTodo.pending, (state, action) => {
			// 此时正在开始添加
			state.loading = true;
		});
		builder.addCase(addAsyncTodo.fulfilled, (state, action) => {
			// 成功添加
			state.todos.push(action.meta.arg);
			state.loading = false;
		});
		builder.addCase(addAsyncTodo.rejected, (state, action) => {
			// 此时正在开始添加
			state.loading = false;
		});
	},
});

export default todoSlice;
export const { isDoneTodo, editTodoId, editTodoName, delTodo, isAllDone, delDoneTodos } = todoSlice.actions;
