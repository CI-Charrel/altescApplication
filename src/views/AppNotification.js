
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, BackHandler } from 'react-native';
import { AppStyle } from '../styles/app_style';
import { BackIcon } from '../utilities/svgroup';
import { Twitter, Facebook, Snapshot, Instagram, Tiktok, SvgNotify, BoxWithPlus } from '../utilities/svgroup';
import { backNavigation } from '../utilities/helperTools';
import AppContainer from './AppContainerView';
import { useDispatch, useSelector } from 'react-redux';
import * as NotificationAction from '../core/actions/notification-action';

const AppNotification = (props) => {
  
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notification);
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
                <Text style={AppStyle.fontSemiHeader}>notify.me</Text>
              </View>
          </View>

          <View style={{ flex:1, alignItems:'center', marginTop:60}}>
            <View style={{ flexDirection:'row'}}>
              <Twitter style={{marginBottom:20}}/>
              <View style={{ marginTop:5, marginLeft:30}}>
                <BoxWithPlus style={AppStyle.box} fill="#ffff" withPlus={notification.twitter} onPress={()=> dispatch(NotificationAction.updateTwitterNotification(!notification.twitter))} />
              </View>
            </View>
            

            <View style={{ flexDirection:'row'}}>
              <Facebook style={{marginBottom:20}}/>
              <View style={{ marginTop:5, marginLeft:30}}>
                <BoxWithPlus style={AppStyle.box} fill="#ffff" withPlus={notification.facebook} onPress={()=> dispatch(NotificationAction.updateFacebookNotification(!notification.facebook))} />
              </View>
            </View>

            <View style={{ flexDirection:'row'}}>
              <Snapshot style={{marginBottom:20}}/>
              <View style={{ marginTop:5, marginLeft:30}}>
                <BoxWithPlus style={AppStyle.box} fill="#ffff" withPlus={notification.snapshot} onPress={()=> dispatch(NotificationAction.updateSnapshotNotification(!notification.snapshot))} />
              </View>
            </View>

            <View style={{ flexDirection:'row'}}>
              <Instagram style={{marginBottom:20}}/>
              <View style={{ marginTop:5, marginLeft:30}}>
                <BoxWithPlus style={AppStyle.box} fill="#ffff" withPlus={notification.instagram} onPress={()=> dispatch(NotificationAction.updateInstagramNotification(!notification.instagram))} />
              </View>
            </View>


            <View style={{ flexDirection:'row'}}>
              <Tiktok style={{marginBottom:20}}/>
              <View style={{ marginTop:5, marginLeft:30}}>
                <BoxWithPlus style={AppStyle.box} fill="#ffff" withPlus={notification.tiktok} onPress={()=> dispatch(NotificationAction.updateTiktokNotification(!notification.tiktok))} />
              </View>
            </View>
           
            
            <Text style={AppStyle.fontSmall}>select to receive an audible notification</Text>
          </View>
      </View> 
    </AppContainer>
  );
}


export default AppNotification;