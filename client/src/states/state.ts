import { states } from "./states";

type States = keyof typeof states;

export class State {
	#state: States = states.MENU;

	get() {
		return this.#state;
	}

	set(newState: States) {
		this.#state = newState;
	}
}
