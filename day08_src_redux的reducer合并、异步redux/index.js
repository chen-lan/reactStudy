import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";

// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.createRoot(document.getElementById("root")).render(
	// 作用: 是把store传递给项目中所有的和redux关联的那个高阶组件
	<Provider store={store}>
		<App />
	</Provider>
);
