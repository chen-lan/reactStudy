import { ADDTITLE } from "./constant";
export default function reducer(state = [{ id: 1, title: "英雄联盟" }], action) {
	switch (action.type) {
		case ADDTITLE:
			const newState = [...state, action.payload];
			return newState;

		default:
			return state;
	}
}
