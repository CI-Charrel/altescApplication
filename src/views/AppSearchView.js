import React, { useState, useEffect } from 'react';
import { Text, View, Animated, TouchableOpacity } from 'react-native';
import { AppStyle } from '../styles/app_style';
import { Reload } from '../utilities/svgroup';
import { AppManager } from '../utilities/app_bridge';
import AppContainer from './AppContainerView';


const AppSearchView = (props) => {
  const animated_pl1 = new Animated.Value(0); 
  const animated_pl2 = new Animated.Value(0); 
  const animated_pl3 = new Animated.Value(0); 

  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  Animated.parallel([

    Animated.loop(
      Animated.timing(animated_pl1, {
        toValue: 1,
        duration:2000,
        useNativeDriver: true,
        delay: 300
      })),
    
    Animated.loop(
      Animated.timing(animated_pl2, {
        toValue: 1,
        duration:2000,
        useNativeDriver: true ,
        delay: 500
      })),
    
    Animated.loop(
      Animated.timing(animated_pl3, {
        toValue: 1,
        duration:2000,
        useNativeDriver: true,
        delay: 800
      })),
  ]).start()



  // const makeTimeout = () => {
  //   setTimeout(() => { 
  //     const ListDevices = DeviceNearArea(props);
  //     if(ListDevices.length > 0){
  //       props.navigation.navigate('AppDeviceListView')
  //     }
  //     else {
  //       setShow(false);
  //     }
  //   }, 5000);
  // }


  useEffect(() => {
    const bridge = AppManager();
    if(show){
      setTimeout(() => {
        bridge.searchDevices((callback) => {
          console.log(callback["payload"]);
          if(callback["payload"].length > 0) {
            props.navigation.navigate('AppDeviceListView')
          }
          else {
            setShow(false);
          }
        });
      }, 5000);
    }
  }); 



  const displaySearchAnimation = () => {
    if (show) {
      return (
          <View style={{ flexDirection:'row'}}>
            <View><Text style={AppStyle.fontSemiHeader}>searching </Text></View>
            <View>
              <Animated.View style={[AppStyle.pulse, {transform:[{scale:animated_pl1}]}]}/>
            </View>
            <View>
              <Animated.View style={[AppStyle.pulse, {transform:[{scale:animated_pl2}]}]}/>
            </View>
            <View>
              <Animated.View style={[AppStyle.pulse, {transform:[{scale:animated_pl3}]}]}/>
            </View>
          </View>
      )
    }

    return(
      <TouchableOpacity onPress={() => { setShow(true)}}>
      <View style={{ flexDirection:'column', alignItems:'center'}}>
        <View style={{ marginBottom:10}}>
            <Reload></Reload>
        </View>
        <View><Text style={AppStyle.fontSmall}>Tap to Retry</Text></View>
      </View>
      </TouchableOpacity>
    );
  }


  return (
    <AppContainer>
      <View style={AppStyle.mainscreen}>  
        <View style={AppStyle.pulse_container}>
          { displaySearchAnimation() }

        </View>
      </View>
    </AppContainer>
  );
}


export default AppSearchView;