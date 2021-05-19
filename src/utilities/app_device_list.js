import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NowPlayingIcon } from '../utilities/svgroup';
import { AppStyle } from '../styles/app_style'
import { AppManager } from '../utilities/app_bridge';


/*
Return data should look like this 
"{ payload": [{"deviceName": "TWS B2341"}, {"deviceName": "TWS WE2X"}] }
*/

const DeviceNearArea = (props) => {
    const [devices, setDevices] = React.useState([]);

    React.useEffect(() => {
        const bridge = AppManager();
        bridge.availableDevices((callback) => {
            dataLoad = callback["payload"];
            let deviceComponent = [];
            if(dataLoad.length > 0){
                for (let index = 0; index < dataLoad.length; index++)
                {
                    const device_name = dataLoad[index]["deviceName"];
                    let device_element = 
                        <TouchableOpacity key={index} style={{ marginBottom:15}}>
                            <View style={{ flexDirection:'row'}}>
                            <NowPlayingIcon style={AppStyle.nowplaying}/>
                                <Text style={[AppStyle.listfont, { marginTop:15}]}
                                onPress={() => {props.navigation.navigate('AppCustomize', {'device': device_name})}}
                                >{device_name} </Text>
                            </View>
                        </TouchableOpacity>      
                    deviceComponent.push(device_element);   
                }
                setDevices(deviceComponent);
            }
    });
    }, []);
    return (devices);
}


export {
    DeviceNearArea
}