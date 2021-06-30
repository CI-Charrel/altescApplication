import React from 'react';
import { View, Text } from 'react-native';
import { AppStyle } from '../styles/app_style'
import AsyncStorage from '@react-native-community/async-storage';
import Slider from '@react-native-community/slider';
import * as SoundActions from '../core/actions/sound-action';
import { useDispatch } from "react-redux";


const getAppTmp = async () => {
    try {
        return await AsyncStorage.getItem('@tmp')
    } catch(e) {
        console.log('Done.')
    }
}

const addAppTmp = async (key,value) => {
    try {
        console.log("successfully store: "+ value);
        await AsyncStorage.setItem(key, value)
    } catch(e) {
        console.log('Done.')
    }
}


/* store callback dictionary */
const storeCallBackResponse = (key,value) => {
    try {
        console.log('store local storage response : ' + JSON.stringify(value));
        AsyncStorage.setItem(key, JSON.stringify(value))
        // await AsyncStorage.setItem(key, JSON.stringify(value))

    } catch(e) {
        console.log('Error storing callback: ' + e);
    }
}

/* get the callback response from local storage */
const getCallBackResponse = (key) => {
    try {
        // return await AsyncStorage.getItem(key);      
        return AsyncStorage.getItem(key);   
    } catch(e) {
        console.log('Done.')
    }
}




const backNavigation = (props, screen) => {
    props.navigation.navigate(screen);
    return true;
  }

const ApplicationBackPress = (props, screen, data={}) => {
    const backAction = () => {
        props.navigation.navigate(screen, data);
        return true;
    }   
    // useEffect(() => {
    //     // componentDidMount events
    //     // const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
    //     BackHandler.addEventListener("hardwareBackPress", backAction);
    //     return () => BackHandler.removeEventListener();
    // }, []); 
 };



const AppDeviceList = async () => {
    /*
     method: availableDevices()
     response: {"payload": [{"address": "5D:1C:4E:8F:72:BC", "deviceName": "TWS"}]}
    */

    // const deviceList = ["h1", "h2", "h3"];
    const bridge = AppBridge();
    bridge.availableDevices((callback) => { 
        storeCallBackResponse("devices",callback["payload"]);
    });


    const deviceList = await getCallBackResponse('devices')
    console.log(typeof(deviceList));
    return deviceList;
}





const renderSoundAdjustment = (bass, mid, treble, loud) =>
{
    const dispatch = useDispatch();
    const labels = ["bass","mid","treble","loud"];
    const volumes = [bass, mid, treble, loud];

    let componentArr = [];

    for (let index = 0; index < labels.length; index++) {
        const element = labels[index];
        const volume = volumes[index];

        let tmp_compo = 
            <View key={index} style={AppStyle.sound_set_container}>
                    <Text>+</Text>
                    <Slider
                        style={{width: 230, height: '15%', marginTop:95 ,transform: [ { rotate: "-90deg" } ]}}
                        value={volume}
                        minimumValue={5}
                        maximumValue={100}
                        minimumTrackTintColor="#000"
                        maximumTrackTintColor="#000"
                        thumbImage={ require('../assets/circle.png') }

                        onValueChange={(value) => dispatch(SoundActions.setSound(value,element))}
                        step={2}/>
                <Text style={{ fontFamily:'FuturaSH-Medium', fontSize:20, marginTop:95}}>{ element }</Text>    
            </View>
        
        componentArr.push(tmp_compo);
    }
    
    return componentArr;
}


export {
    AppDeviceList,
    renderSoundAdjustment,
    ApplicationBackPress,
    backNavigation,
    getCallBackResponse
}