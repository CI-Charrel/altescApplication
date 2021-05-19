import React, { useEffect } from 'react';
import { View, Text, BackHandler } from 'react-native';
import { AppStyle } from '../styles/app_style'
import AppContainer from './AppContainerView';
import { drawerView } from '../utilities/templateString';
import { backNavigation } from '../utilities/helperTools';
import { Close } from '../utilities/svgroup';


const AppDrawerViews = (props) => {
  // ApplicationBackPress (props, 'AppTechTools');

  useEffect(() => {
    const screen = 'AppTechTools';
    const backhandler = BackHandler.addEventListener('hardwareBackPress', () => backNavigation(props, screen));
    return () => backhandler.remove();
  },[])

  return (
    <AppContainer>
      <View style={AppStyle.mainscreen}>
          <View style={{ flexDirection:'row', height:35}}>
            <Close style={{ marginTop:10 }} onPress={() => props.navigation.navigate('AppTechTools')}/>
              <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text style={AppStyle.fontSemiHeader}>{props.route.params.name}</Text>
              </View>
          </View>

          { drawerView(props.route.params.screen) }
        
      </View> 
    </AppContainer>
  );
}


export default AppDrawerViews;