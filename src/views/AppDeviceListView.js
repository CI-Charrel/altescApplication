import React, { useEffect } from 'react';
import { View, TouchableOpacity, Text, ScrollView, BackHandler } from 'react-native';
import { AppStyle } from '../styles/app_style';
import { backNavigation } from '../utilities/helperTools';
import { DeviceNearArea } from '../utilities/app_device_list';
import { Close, Logo } from '../utilities/svgroup';

import AppContainer from './AppContainerView'

const AppDeviceListView = (props) => {

  useEffect(() => {
    console.log('mount devicelist');
    const backhandler = BackHandler.addEventListener('hardwareBackPress', () => backNavigation(props, 'AppMainView'));
    return () => backhandler.remove();
  },[])


  return (
    <AppContainer>
      <View style={AppStyle.mainscreen}>
        <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => props.navigation.navigate('AppMainView') }>
                <Close style={AppStyle.close_only} />
            </TouchableOpacity>
        </View>
        <View style={{ flex: 2, alignItems:'center', justifyContent:'center' }}>
            <Logo name="App Logo" style={AppStyle.deviceInterfaceLogo} color="#000"></Logo> 
            <View><Text style={AppStyle.fontHeader}>devices.found</Text></View>
        </View>
        <View style={{ flex: 3 }}>
            <View style={AppStyle.horizontalLine}></View>
            <ScrollView>

                { DeviceNearArea(props) }
            </ScrollView>
        </View>
      </View>
    </AppContainer>
  );
}


export default AppDeviceListView;