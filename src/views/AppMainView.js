import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { AppStyle } from '../styles/app_style'
import { Logo, MainScreenButton } from '../utilities/svgroup'
import { AppNavigate } from '../utilities/app_navigation';
import AppContainer from './AppContainerView'


const AppMainView = (props) => {

  return (
    <AppContainer>
      <View style={AppStyle.mainscreen}>
        
        <View style={AppStyle.mainscreenview}>
          <Text style={AppStyle.fontHeader}>lets.connect</Text>
        </View>

        <View style={AppStyle.mainscreenview}>
          <Logo name="App Logo" style={AppStyle.svg_logo} color="#000"></Logo>
          <Text style={AppStyle.fontHeader}>venice//ca</Text>
        </View>
        
        <View style={AppStyle.mainscreenview}>
          <TouchableOpacity style={AppStyle.touch} onPress={() => AppNavigate(props, 'AppSearchView') }>
            <MainScreenButton style={AppStyle.start_button}/>
          </TouchableOpacity>
        </View>
      </View>
      
    </AppContainer>
  );
}


export default AppMainView;