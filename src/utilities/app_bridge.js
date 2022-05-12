import { Platform, NativeModules } from 'react-native';
import * as MockModule from './app_mock';

const AppManager = () => {
    if (Platform.OS == 'ios'){
        const bridge = MockModule;
        return bridge;
    } else {
        const bridge = MockModule;
        return bridge;
    }
}

export {
    AppManager
}