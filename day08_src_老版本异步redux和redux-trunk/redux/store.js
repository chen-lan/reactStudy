import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./reducer"; //引入reducer函数

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
store.subscribe(() => {
	console.log("store的数据改变了", store.getState());
});
export default store;
