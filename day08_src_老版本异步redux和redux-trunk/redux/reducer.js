import { ADD, SUB } from "./constant";

export default function reducer(state = { count: 0, msg: "哈哈哈哈" }, action) {
	switch (action.type) {
		case ADD:
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
