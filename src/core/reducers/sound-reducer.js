import constants from "../types";
const initialState = {
    bass: null,
    mid: null,
    treble: null,
    loud: null,
};

export function soundReducer(state = initialState, action) {
  switch (action.type) {
    case constants.SET_BASS:
      return Object.assign({}, state, {
        bass: action.payload,
      });
      case constants.SET_MID:
      return Object.assign({}, state, {
        mid: action.payload,
      });
      case constants.SET_TREBLE:
      return Object.assign({}, state, {
        treble: action.payload,
      });
      case constants.SET_LOUD:
      return Object.assign({}, state, {
        loud: action.payload,
      });
    default:
      return state;
  }
}
