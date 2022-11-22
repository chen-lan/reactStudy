import { ADD, SUB } from "./constant";

export default function reducer(state = { count: 1, msg: "合并reducer" }, action) {
	switch (action.type) {
		case ADD:
			console.log("state.count====", state.count);
			return {
				...state,
				count: state.count + action.payload,
			};

		case SUB:
			return {
				...state,
				count: state.count - action.payload,
			};
		default:
			return state;
	}
}
