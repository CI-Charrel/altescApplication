import React, { useState, useMemo, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, BackHandler } from 'react-native';
import { AppStyle } from '../styles/app_style'
import { BackIcon, NowPlayingIcon, BoxWithPlus} from '../utilities/svgroup'
import AppContainer from './AppContainerView'
import { backNavigation } from '../utilities/helperTools'


const AppCustomize = (props) => {

    useEffect(() => {
        console.log('mount customize');
        const screen = 'AppDeviceListView';
        const backhandler = BackHandler.addEventListener('hardwareBackPress', () => backNavigation(props, screen));
        return () => backhandler.remove();
      },[])
    

    const [cross, setcross] = useState("");
    const [devicename, setdevicename] = useState(props.route.params.device);


    const addchecksign = (color) => {
        setcross(color);
    }

    const checkstroke = (color) => {
        if(color != cross){
            return "";
        }
        return cross;
    }

    return (
        <AppContainer>
            <View style={AppStyle.mainscreen}>
                
                {/* <KeyboardAvoidingView> */}
                <View style={{ flex:1 }}>
                    <View style={{ justifyContent:'space-between', flexDirection:'row', flex:1}}>
                        <View>
                            <TouchableOpacity onPress={() => props.navigation.navigate('AppDeviceListView') }>
                                <BackIcon style={AppStyle.back_button} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => props.navigation.navigate('AppTechTools') }>
                                <Text style={AppStyle.finish}>finish</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex:2 , alignItems:'center'}}>
                        <Text style={[AppStyle.fontHeader, {paddingBottom:30}]}>lets.customize</Text>
                        <NowPlayingIcon style={AppStyle.deviceInterfaceLogo}/>
                    </View> 
                </View>

                <View style={{ flex:1, marginLeft:8 }}>
                    <Text style={AppStyle.fontSmall}>+ name</Text>
                    
                    <TextInput 
                    style={AppStyle.textInput} 
                    value={devicename}
                    onChangeText={(text) => setdevicename(text)}
                    />
                    
                    <View style={AppStyle.horizontalLine}></View>
                    <Text style={AppStyle.fontSmall}>+ color</Text>

                    <View style={{ flexDirection:'row'}}>
                        <BoxWithPlus style={AppStyle.box} fill="#231f20" stroke={checkstroke('#fff')} onPress={() => addchecksign('#fff')} />
                        <BoxWithPlus style={AppStyle.box} fill="#ffff" stroke={checkstroke('#000')} onPress={() => addchecksign('#000')} />
                    </View>
                    
                </View>    
            </View>

        </AppContainer>
        
        );
    }


export default AppCustomize;