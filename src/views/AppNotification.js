
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, BackHandler } from 'react-native';
import { AppStyle } from '../styles/app_style';
import { BackIcon } from '../utilities/svgroup';
import { Twitter, Facebook, Snapshot, Instagram, Tiktok, SvgNotify, BoxWithPlus } from '../utilities/svgroup';
import { backNavigation } from '../utilities/helperTools';
import AppContainer from './AppContainerView';


const AppNotification = (props) => {
  const [twitter,  settwitter] = useState("");
  const [facebook, setfacebook] = useState("");
  const [snapshot, setsnapshot] = useState("");
  const [instagram, setinstagram] = useState("");
  const [tiktok,  settiktok] = useState("");

  const setKeys = {
    "twitter": settwitter,
    "facebook": setfacebook,
    "snapshot": setsnapshot,
    "instagram": setinstagram,
    "tiktok": settiktok
  };

  useEffect(() => {
    const screen = 'AppPlayingView';
    const backhandler = BackHandler.addEventListener('hardwareBackPress', () => backNavigation(props, screen));
    return () => backhandler.remove();
  },[])


  const addplus = (key, color) => {
    var mycolor = "";
    if(color == "#fff" || color == "") {
      mycolor = "#000"
    }
    else {
      mycolor = "#fff"
    }
    
    console.log(key);
    console.log(mycolor);

    setKeys[key](mycolor);

  }

  return (
    <AppContainer>
      <View style={AppStyle.mainscreen}>
          <View style={{ flexDirection:'row', height:35}}>
            <TouchableOpacity onPress={() => props.navigation.navigate('AppPlayingView')}>
              <BackIcon style={AppStyle.back_button} />
            </TouchableOpacity>
              <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text style={AppStyle.fontSemiHeader}>notify.me</Text>
              </View>
          </View>

          <View style={{ flex:1, alignItems:'center', marginTop:60}}>
            <View style={{ flexDirection:'row'}}>
              <Twitter style={{marginBottom:20}}/>
              <View style={{ marginTop:5, marginLeft:30}}>
                <BoxWithPlus style={AppStyle.box} fill="#ffff" stroke={twitter} onPress={()=> addplus('twitter', twitter)}/>
              </View>
            </View>
            

            <View style={{ flexDirection:'row'}}>
              <Facebook style={{marginBottom:20}}/>
              <View style={{ marginTop:5, marginLeft:30}}>
                <BoxWithPlus style={AppStyle.box} fill="#ffff" stroke={facebook} onPress={()=> addplus('facebook', facebook)}/>
              </View>
            </View>

            <View style={{ flexDirection:'row'}}>
              <Snapshot style={{marginBottom:20}}/>
              <View style={{ marginTop:5, marginLeft:30}}>
                <BoxWithPlus style={AppStyle.box} fill="#ffff" stroke={snapshot} onPress={()=> addplus('snapshot', snapshot)}/>
              </View>
            </View>

            <View style={{ flexDirection:'row'}}>
              <Instagram style={{marginBottom:20}}/>
              <View style={{ marginTop:5, marginLeft:30}}>
                <BoxWithPlus style={AppStyle.box} fill="#ffff" stroke={instagram} onPress={()=> addplus('instagram', instagram)}/>
              </View>
            </View>


            <View style={{ flexDirection:'row'}}>
              <Tiktok style={{marginBottom:20}}/>
              <View style={{ marginTop:5, marginLeft:30}}>
                <BoxWithPlus style={AppStyle.box} fill="#ffff" stroke={tiktok} onPress={()=> addplus('tiktok', tiktok)}/>
              </View>
            </View>
           
            
            <Text style={AppStyle.fontSmall}>select to receive an audible notification</Text>
          </View>
      </View> 
    </AppContainer>
  );
}


export default AppNotification;