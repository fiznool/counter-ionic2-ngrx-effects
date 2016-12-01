import { Action } from "@ngrx/store";

export interface AppState {
  counter: number;
}

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";
export const RESET_SUCCESS = "RESET_SUCCESS";

export function counterReducer(state: number = 0, action: Action): number {
    switch (action.type) {
        case INCREMENT:
            return state + 1;

        case DECREMENT:
            return state - 1;

        case RESET_SUCCESS:
            return 0;

        default:
            return state;
    }
};
