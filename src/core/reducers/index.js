import { combineReducers } from "redux";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { persistReducer } from "redux-persist";
import { soundReducer } from "./sound-reducer";
import { deviceReducer } from "./device-reducer";
import { notificationReducer } from "./notification-reducer";

const persistConfigSound = {
  key: "sound",
  storage: AsyncStorage,
  whitelist: ["bass", "mid", "treble", "loud"],
};
const persistConfigNotification = {
  key: "notification",
  storage: AsyncStorage,
  whitelist: ["facebook", "twitter", "snapshot", "instagram","tiktok"],
};

const rootReducer = combineReducers({
  sound: persistReducer(persistConfigSound, soundReducer),
  device: deviceReducer,
  notification: persistReducer(persistConfigNotification, notificationReducer)
});

export default rootReducer;
