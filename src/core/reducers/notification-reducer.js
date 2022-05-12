import constants from "../types";
const initialState = {
    facebook: false,
    twitter: false,
    snapshot: false,
    instagram: false,
    tiktok: false
};

export function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case constants.SET_FACEBOOK:
        return Object.assign({}, state, {
         facebook: action.payload,
        });
    case constants.SET_TWITTER:
        return Object.assign({}, state, {
         twitter: action.payload,
        });
    case constants.SET_SNAPSHOT:
        return Object.assign({}, state, {
        snapshot: action.payload,
        });
    case constants.SET_INSTAGRAM:
        return Object.assign({}, state, {
         instagram: action.payload,
        });
    case constants.SET_TIKTOK:
        return Object.assign({}, state, {
         tiktok: action.payload,
        });
    default:
      return state;
  }
}
