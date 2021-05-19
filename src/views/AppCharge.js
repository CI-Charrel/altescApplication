
import React, { useEffect } from 'react';
import { View, TouchableOpacity, Text, Image, BackHandler } from 'react-native';
import { AppStyle } from '../styles/app_style';
import { BackIcon, BatteryVertical } from '../utilities/svgroup';
import { backNavigation } from '../utilities/helperTools';
import AppContainer from './AppContainerView';


const AppCharge = (props) => {
  // ApplicationBackPress (props, 'AppPlayingView');
  
  useEffect(() => {
    const screen = 'AppPlayingView';
    const backhandler = BackHandler.addEventListener('hardwareBackPress', () => backNavigation(props, screen));
    return () => backhandler.remove();
  },[])

  return (
    <AppContainer>
      <View style={AppStyle.mainscreen}>
          <View style={{ flexDirection:'row', height:35}}>
            
            <TouchableOpacity onPress={() => props.navigation.navigate('AppPlayingView')}>
              <BackIcon style={AppStyle.back_button} />
            </TouchableOpacity>

              <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text style={AppStyle.fontSemiHeader}>re.chrg</Text>
              </View>
          </View>

          <View style={AppStyle.batteryHeader}>   

            <View>
                <BatteryVertical style={AppStyle._verticalBattery}></BatteryVertical>
            </View>

            <View style={{ flexDirection:'column'}}>
                <Image style={{ marginTop:10}} source={require('../assets/right_image.png')}/>
                <Text style={AppStyle._batteryFont}>[right]</Text>
            </View>

          </View>

          <View style={AppStyle.batteryContainer}>         
            
            <View>
                <BatteryVertical style={AppStyle._verticalBattery}></BatteryVertical>
            </View>

            <View style={{ flexDirection:'column'}}>
                <Image style={{ marginTop:10}} source={require('../assets/left_image.png')}/>
                <Text style={AppStyle._batteryFont}>[left]</Text>
            </View>

          </View>

      </View> 
    </AppContainer>
  );
}


export default AppCharge;