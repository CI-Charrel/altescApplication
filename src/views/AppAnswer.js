
import React, { useEffect } from 'react';
import { View, Text, BackHandler } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AppStyle } from '../styles/app_style'
import { backNavigation } from '../utilities/helperTools'
import { BackIcon } from '../utilities/svgroup';
import AppContainer from './AppContainerView'


const AppAnswer = (props) => {
  useEffect(() => {
    const screen = 'AppAskUs';
    const backhandler = BackHandler.addEventListener('hardwareBackPress', () => backNavigation(props, screen));
    return () => backhandler.remove();
  },[])
  

  return (
    <AppContainer>
      <View style={AppStyle.mainscreen}>
          <View style={AppStyle.askHeader}>
            <BackIcon style={{ marginTop:10 }} onPress={() => props.navigation.navigate('AppAskUs')}/>
              <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text style={AppStyle.fontSemiHeader}>ask.us</Text>
              </View>
          </View>

          <View style={{ flex:1, marginTop:20}}>
              <Text style={[AppStyle.fontMedium, { paddingBottom:30}]}>Q: { props.route.params.question }</Text>
              <View style={{ flexDirection:'row'}}>
                <Text style={AppStyle.fontMedium}>A: </Text>
                <Text style={AppStyle.fontMedium}> { props.route.params.answer } </Text>
              </View>
              
          </View>

          <View style={{ flex:1 }}>
              <TouchableOpacity onPress={() => props.navigation.navigate('AppContact')}>
                 <Text style={AppStyle.fontMedium}>+ this doesnt answer my question</Text>
              </TouchableOpacity>    
            </View>
         
      </View> 
    </AppContainer>
  );
}


export default AppAnswer;