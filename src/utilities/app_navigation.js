import { EnableBluetoothDevice } from '../utilities/app_bluetooth' 

const AppNavigate = (props, screen, data={}) => {
    if (screen == "AppSearchView") {
        EnableBluetoothDevice();
    }
    props.navigation.navigate(screen, data);
}


export {
    AppNavigate
}