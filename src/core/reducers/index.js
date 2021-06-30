import { combineReducers } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import { soundReducer } from "./sound-reducer";
import { deviceReducer } from "./device-reducer";

const persistConfigSound = {
  key: "sound",
  storage: AsyncStorage,
  whitelist: ["bass", "mid", "treble", "loud"],
};

const rootReducer = combineReducers({
  sound: persistReducer(persistConfigSound, soundReducer),
  device: deviceReducer
});

export default rootReducer;
