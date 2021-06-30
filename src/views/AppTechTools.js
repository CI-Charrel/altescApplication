import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, BackHandler } from 'react-native';
import { AppStyle } from '../styles/app_style';
import { Burger, Logo, Plus, Trash, Edit } from '../utilities/svgroup';
import { Badge } from 'react-native-elements'
import { backNavigation } from '../utilities/helperTools';
import { AppNavigate } from '../utilities/app_navigation';
import AppContainer from './AppContainerView';
import { useSelector } from 'react-redux';


const AppTechTools = (props) => {
  
  const data = useSelector((state) => state.device);
  console.log(data)
  useEffect(() => {
    const screen = 'AppCustomize';
    const backhandler = BackHandler.addEventListener('hardwareBackPress', () => backNavigation(props, screen));
    return () => backhandler.remove();
  },[])

  
  return (
      <AppContainer>
        <View style={AppStyle.mainscreen}>
          <View style={AppStyle.techHeader}>
            <View style={{ flex:1, flexDirection:'row'}}>
              <Burger style={AppStyle.burgerDrawer} onPress={() => props.navigation.openDrawer() }/>
              <Logo style={AppStyle.techLogo} color="#000" />
            </View>

            <View style={AppStyle.techTextHeader}>
              <View><Text style={AppStyle.fontSemiHeader}>tech.tools</Text></View>
            </View>

            <View style={{ flex:1, justifyContent:'center', alignItems:'flex-end'}}>
              <View></View>
              <Plus style={AppStyle.techPlus} onPress={() => AppNavigate(props,'AppSearchView')}/>
            </View>
          </View>

         
          {/* list of headset devices */}

          {data.devices.map((device)=>
          (<View style={{ marginTop:20 }} key={device.id}>
            <View style={{ flexDirection:'row', justifyContent:'space-between'}}>
              <View style={{ flexDirection:'row'}}>
                <View style={{ marginTop:6, marginRight:5}}>
                  {device.isConnected?  <Badge status="success" />:  <Badge status="warning" />}
                 
                </View>
                <Text style={[AppStyle.fontSmall, { paddingRight:30}]}>{device.name}</Text>
              </View>
              <View style={{ flexDirection:'row'}}>
                <TouchableOpacity onPress={() => {props.navigation.reset({
                      index: 0,
                      routes: [{name: "AppCustomize", params: {id: device.id, name: device.name, isConnected: device.isConnected, screen: 'appTechTools'}}]
                  });
                    }}>
                <Edit style={{ paddingRight:45}}></Edit>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => alert()}>
                  <Trash></Trash>
                </TouchableOpacity>
              </View>
            </View>    
            <View>
              <TouchableOpacity onPress={() => props.navigation.navigate('AppPlayingView')}>
                < Image style={{ width:'100%', height:80}} source={require('../assets/pair.png')} onPress={() => alert('sample')}/>
              </TouchableOpacity>
            </View>
          </View>)
          )}
          



          

          {/* end of region */}



          
          


        </View>
      </AppContainer>
  );
}


export default AppTechTools;