
import React from 'react';
import { View, Text } from 'react-native';
import { AppStyle } from '../styles/app_style'
import AppContainer from './AppContainerView'


const AppContact = (props) => {

  
  return (
    <AppContainer>
      <View style={AppStyle.mainscreen}>
        <View style={{ flex:1, alignItems:'center'}}>
            <Text style={AppStyle.fontSemiHeader}>contact.us</Text>
        </View>

        <View style={{ flex:1, alignItems:'center'}}>
            <Text style={AppStyle.fontSemiHeader}> www.altesc.tech/contact</Text>
        </View>
       
      </View> 
    </AppContainer>
  );
}


export default AppContact;