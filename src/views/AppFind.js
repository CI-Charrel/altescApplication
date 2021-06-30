
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, Image, BackHandler, ImageBackground, StyleSheet } from 'react-native';
import { AppStyle } from '../styles/app_style';
import { BackIcon, Sendsignal } from '../utilities/svgroup';
import { getCurrentLocation } from '../utilities/helperTools';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; 
import AppContainer from './AppContainerView';


const AppFind = (props) => {
  const [latitude, setlat] = useState(8.899318);
  const [longitude, setlong] = useState(125.548897);
  
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
                initialRegion={{
                  latitude: 8.899318,
                  longitude: 125.548897,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }}
                style={styles.map}
              >

                  <Marker style={{ width:50, height:50}} coordinate={{latitude: 8.899318,longitude: 125.548897}}
                    image={require('../assets/map_marker.png')}/>
                </MapView>
            </View>
                
            <Text style={AppStyle.fontSmall}>last.seen: 18 minutes ago</Text>

            <View style={{ flex: 1, alignItems:'center' }}>
              <Sendsignal name="App Logo" style={AppStyle.sendsignal} color="#000" onPress={() => alert('sending..')}></Sendsignal>
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