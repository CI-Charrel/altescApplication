import constants from "../types";


export const updateDevice = (id,name) => ({
    type: constants.UPDATE_DEVICE,
    newDevice: {id, name,isConnected: true},
    id
});