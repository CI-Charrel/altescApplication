import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NowPlayingIcon } from '../utilities/svgroup';
import { AppStyle } from '../styles/app_style'
import { AppManager } from '../utilities/app_bridge';
import { Platform } from 'react-native';
import { useSelector } from 'react-redux';


/*
Return data should look like this 
"{ payload": [{"deviceName": "TWS B2341"}, {"deviceName": "TWS WE2X"}] }
*/

const DeviceNearArea = (props) => {
    const [devices, setDevices] = React.useState([]);
    const data = useSelector((state)=> state.device);
    React.useEffect(() => {
        let deviceComponent = [];
            
            if(data.devices.length > 0){
                for (let index = 0; index < data.devices.length; index++)
                {
                   
                    let device_element = 
                        <TouchableOpacity key={index} style={{ marginBottom:15}} onPress={()=>{props.navigation.reset({
                            index: 0,
                            routes: [{name: "AppCustomize", params: { ...data.devices[index], screen: 'deviceList' }}]
                        });
                    }}>
                            <View style={{ flexDirection:'row'}}>
                            <NowPlayingIcon style={AppStyle.nowplaying}/>
                                <Text style={[AppStyle.listfont, { marginTop:15}]}>{data.devices[index].name}</Text>
                            </View>
                        </TouchableOpacity>     
                    deviceComponent.push(device_element);   
                }
                setDevices(deviceComponent);
            
    
            // bridge.availableDevices((callback) => {
            //     dataLoad = callback["payload"];
            //     if(dataLoad.length > 0){
            //         for (let index = 0; index < dataLoad.length; index++)
            //         {
            //             const device_name = dataLoad[index]["deviceName"];
            //             const device_id = dataLoad[index]["id"];
            //             let device_element = 
            //                 <TouchableOpacity key={index} style={{ marginBottom:15}}>
            //                     <View style={{ flexDirection:'row'}}>
            //                     <NowPlayingIcon style={AppStyle.nowplaying}/>
            //                         <Text style={[AppStyle.listfont, { marginTop:15}]}
            //                                 onPress={() => {props.navigation.reset({
            //                                     index: 0,
            //                                     routes: [{name: "AppCustomize", params: {id: device_id, name: device_name, isConnected: true, screen: 'deviceList'}}]
            //                                 });
            //                             }}
            //                         >{device_name} </Text>
            //                     </View>
            //                 </TouchableOpacity>      
            //             deviceComponent.push(device_element);   
            //         }
            //         setDevices(deviceComponent);
            //     }
            // });

            
            
        }
    }, []);
    return (devices);
}


export {
    DeviceNearArea
}