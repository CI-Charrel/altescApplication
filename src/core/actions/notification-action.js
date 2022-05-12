import constants from "../types";


export const updateFacebookNotification = (value) => ({
    type: constants.SET_FACEBOOK,
    payload: value
});
export const updateTwitterNotification = (value) => ({
    type: constants.SET_TWITTER,
    payload: value
});
export const updateSnapshotNotification = (value) => ({
    type: constants.SET_SNAPSHOT,
    payload: value
});
export const updateInstagramNotification = (value) => ({
    type: constants.SET_INSTAGRAM,
    payload: value
});
export const updateTiktokNotification = (value) => ({
    type: constants.SET_TIKTOK,
    payload: value
});