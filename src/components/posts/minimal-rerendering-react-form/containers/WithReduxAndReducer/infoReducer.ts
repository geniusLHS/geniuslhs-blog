import { InfoDepend, Action } from "../../types";

export function infoReducer(state: InfoDepend, action: Action) {
  const newState = { ...state, [action.property]: action.payload };

  if (state.name !== newState.name) {
    newState.copyName = newState.name;
  }

  if (state.copyName !== newState.copyName) {
    newState.doubleCopyName = newState.copyName;
  }

  return newState;
}
