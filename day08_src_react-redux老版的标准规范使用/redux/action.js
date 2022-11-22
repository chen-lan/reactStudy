import { ADD, SUB } from "./constant";
export function addAction(payload) {
	const createAtion = { type: ADD, payload };
	return createAtion;
}
export function subAction(payload) {
	const createAtion = { type: SUB, payload };
	return createAtion;
}
