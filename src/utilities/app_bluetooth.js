import { Platform } from 'react-native';
import { AppManager } from '../utilities/app_bridge';

const EnableBluetoothDevice = () => {
    if (Platform.OS == 'ios'){
        console.log('ios');
    } 
    else {
        const bridge = AppManager();
        bridge.isBluetoothEnabled((callback) => {
            if(callback == "disabled") {
                bridge.enableBluetooth();
            }
        });
    }
}


export  {
    EnableBluetoothDevice
}