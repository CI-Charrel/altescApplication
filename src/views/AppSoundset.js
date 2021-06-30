
import React, { useEffect } from 'react';
import { Text, View, BackHandler } from 'react-native';
import { AppStyle } from '../styles/app_style';
import { BackIcon, NowPlayingIcon } from '../utilities/svgroup';
import { renderSoundAdjustment, backNavigation } from '../utilities/helperTools';
import AppContainer from './AppContainerView';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from "react-redux";


const AppSoundset = (props) => {
  // ApplicationBackPress (props, 'AppPlayingView');

  const sound = useSelector((state) => state.sound);
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
                <Text style={AppStyle.fontSemiHeader}>sound.set</Text>
              </View>
          </View>

          <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
            <NowPlayingIcon style={{ height:100, width:100}}></NowPlayingIcon>
            <View><Text style={AppStyle.fontHeader}>sound.on</Text></View>
          </View>

          <View style={{ flex:2, flexDirection:'row', justifyContent:'center' }}>

            { renderSoundAdjustment(sound.bass,sound.mid,sound.treble,sound.loud) }
            
          </View>

      </View> 
    </AppContainer>
  );
}


export default AppSoundset;