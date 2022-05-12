import { Platform } from 'react-native';
import { AppManager } from '../utilities/app_bridge';

const EnableBluetoothDevice = () => {
    if (Platform.OS == 'ios'){
        console.log('ios');
    } 
    else {
        
        console.log('ios');
        // const bridge = AppManager();
        // console.log(bridge)
        // bridge.isBluetoothEnabled((callback) => {
        //     if(callback == "disabled") {
        //         bridge.enableBluetooth();
        //     }
        // });
    }
}


export  {
    EnableBluetoothDevice
}