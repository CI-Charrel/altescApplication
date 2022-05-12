
import React, { useEffect } from 'react';
import { View, Text, BackHandler } from 'react-native';
import { AppStyle } from '../styles/app_style';
import { BackIcon } from '../utilities/svgroup';
import { backNavigation  } from '../utilities/helperTools';
import { QuestionAnswer } from '../utilities/app_question_answer';

import AppContainer from './AppContainerView';
import { TouchableOpacity } from 'react-native-gesture-handler';


const AppAskUs = (props) => {
  // ApplicationBackPress (props, 'AppPlayingView');

  useEffect(() => {
    const screen = 'AppPlayingView';
    const backhandler = BackHandler.addEventListener('hardwareBackPress', () => backNavigation(props, screen));
    return () => backhandler.remove();
  },[])
  
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
              <BackIcon style={{ marginTop:10 }}/>
            </TouchableOpacity>
              <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text style={AppStyle.fontSemiHeader}>ask.us</Text>
              </View>
          </View>

          { QuestionAnswer(props) }
          
      </View> 
    </AppContainer>
  );
}


export default AppAskUs;