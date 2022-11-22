export default function reducer(state = { count: 0, msg: "哈哈哈哈" }, action) {
	switch (action.type) {
		case "add":
			return {
				...state,
				count: state.count + 1,
			};
		case "sub":
			return {
				...state,
				count: state.count - 1,
			};

		default:
			return state;
	}
}
