import { createStore, combineReducers, applyMiddleware } from "redux";
import countReducer from "./count/redux/reducer";
import listReducer from "./list/redux/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
// thunk异步
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	countReducer: countReducer,
	gameTitles: listReducer,
});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
store.subscribe(() => {
	console.log("store的数据改变了", store.getState());
});
export default store;
