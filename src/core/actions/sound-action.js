import constants from "../types";

export const setSound = (value,element) => {
    
    switch (element) {
        case 'bass':
            return setBass(value);
        break;
        case 'mid':
            return setMid(value);
        break;
        case 'treble':
            return setTreble(value);
        break;
        case 'loud':
            return setLoud(value);
        break;
        default:
            return null;
      }
}
export const setBass = (bass) => ({
    type: constants.SET_BASS,
    payload: bass,
});

export const setMid = (mid) => ({
    type: constants.SET_MID,
    payload: mid,
});

export const setTreble = (treble) => ({
    type: constants.SET_TREBLE,
    payload: treble,
});

export const setLoud = (loud) => ({
    type: constants.SET_LOUD,
    payload: loud,
});