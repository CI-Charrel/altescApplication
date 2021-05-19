import { Platform, NativeModules } from 'react-native';

const AppManager = () => {
    if (Platform.OS == 'ios'){
        const bridge = "";
        return bridge;

    } else {
        const bridge = NativeModules.AltEscModule;
        return bridge;
    }
}

export {
    AppManager
}