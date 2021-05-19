
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, Image, BackHandler, ImageBackground, StyleSheet } from 'react-native';
import { AppStyle } from '../styles/app_style';
import { BackIcon, Sendsignal, SvgNotify } from '../utilities/svgroup';
import { getCurrentLocation, backNavigation } from '../utilities/helperTools';
import MapView, { PROVIDER_GOOGLE, Marker, AnimatedRegion, Animated } from 'react-native-maps'; 
import AppContainer from './AppContainerView';


const AppFind = (props) => {
  const [latitude, setlat] = useState(8.899318);
  const [longitude, setlong] = useState(125.548897);


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
                <Text style={AppStyle.fontSemiHeader}>alt.find</Text>
              </View>
          </View>

          <View style={{ marginTop:30, marginBottom:20, alignItems:'center'}}>
            <Text style={AppStyle.fontSmall}>locate.now</Text>
          </View>


          <View style={{ flexDirection: "column", flex:1, marginTo:10 }}>
            <View style={{ flex: 2}}> 
                <MapView
                  provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                  style={styles.map}
                  region={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                  }}>

                <Marker style={{ width:50, height:50}} coordinate={{latitude: latitude,longitude: longitude}}
                  image={require('../assets/map_marker.png')}/>
                </MapView>
            </View>
                
            <Text style={AppStyle.fontSmall}>last.seen: 18 minutes ago</Text>

            <View style={{ flex: 1, alignItems:'center' }}>
              <Sendsignal name="App Logo" style={AppStyle.sendsignal} color="#000" onPress={() => getCurrentLocation()}></Sendsignal>
            </View>
        </View>


      </View> 
    </AppContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    flex:1
  },
 });

export default AppFind;