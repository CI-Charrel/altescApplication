import constants from "../types";


export const updateDevice = (id,name,color) => ({
    type: constants.UPDATE_DEVICE,
    newDevice: {id, name,isConnected: true, color},
    id
});

export const deleteDevice = (id) => ({
    type: constants.DELETE_DEVICE,
    id
});