import constants from "../types";
const initialState = {
    devices: [ { id: 1, name: 'TWS B2341', isConnected: true, color: 'white'},{ id: 2, name: 'TWS WE2X', isConnected: false, color: 'black'}]
};

export function deviceReducer(state = initialState, action) {
  switch (action.type) {
    case constants.ADD_DEVICE:
        return Object.assign({}, state, {
        devices: [...state.devices, action.newDevice]
    });
    case constants.UPDATE_DEVICE:
        let filteredDevice = [];
        filteredDevice = state.devices.filter(x=>x.id != action.id);    
        filteredDevice.push(action.newDevice)   
        console.log(filteredDevice)
        return Object.assign({}, state, {
        devices: filteredDevice
    });
    case constants.DELETE_DEVICE: 
      return Object.assign({}, state, {
        devices: state.devices.filter(x=>x.id != action.id)
    });
    default:
      return state;
  }
}
