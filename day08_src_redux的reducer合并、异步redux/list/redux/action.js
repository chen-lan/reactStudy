import { ADDTITLE } from "./constant";
export function addGameTitle(title) {
	const createAtion = { type: ADDTITLE, payload: { id: Date.now(), title } };
	return createAtion;
}
