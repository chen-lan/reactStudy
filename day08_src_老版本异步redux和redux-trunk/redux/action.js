import { ADD, SUB } from "./constant";
export function addAction(payload) {
	const createAtion = { type: ADD, payload };
	return createAtion;
}
export function subAction(payload) {
	const createAtion = { type: SUB, payload };
	return createAtion;
}
export function asyncAddAction(payload) {
	// dispatch中间件
	return dispatch => {
		setTimeout(() => {
			dispatch(addAction(payload));
		}, 2000);
		// clearTimeout(timer);
	};
}
