import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AppMainView from './views/AppMainView'
import AppSearchView from './views/AppSearchView'
import AppDeviceListView from './views/AppDeviceListView'
import AppCustomize from './views/AppCustomize'
import AppTechTools from './views/AppTechTools'
import AppCustomDrawer from './views/AppCustomDrawer'
import AppDrawerViews from './views/AppDrawerViews'
import AppPlayingView from './views/AppPlayingView'
import AppAskUs from './views/AppAskUs'
import AppAnswer from './views/AppAnswer'
import AppContact from './views/AppContact'

import AppSoundset from './views/AppSoundset'
import AppNotification from './views/AppNotification'
import AppFind from './views/AppFind'
import AppCharge from './views/AppCharge'
import GoogleMap from './views/GoogleMap'


import { useWindowDimensions } from 'react-native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function AppDrawer() {
  
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;
  
  return (
    <Drawer.Navigator 
        drawerContent={ props => <AppCustomDrawer {...props}/>}   
        drawerType={isLargeScreen ? 'permanent' : 'back'} 
        drawerStyle={isLargeScreen ? null : { width: '70%' }} > 
          <Drawer.Screen name="AppDrawer" component={AppTechTools} />
    </Drawer.Navigator>
    );
  }


export default function AppRoute() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
        

        {/* <Stack.Screen name="AppTechTools" component={AppTechTools} /> */}
        
        
        <Stack.Screen name="AppMainView" component={AppMainView} />
        <Stack.Screen name="AppSearchView" component={AppSearchView} />
        <Stack.Screen name="AppDeviceListView" component={AppDeviceListView} />
        <Stack.Screen name="AppCustomize" component={AppCustomize} />
        <Stack.Screen name="AppTechTools" component={AppDrawer} />
        <Stack.Screen name="AppDrawerViews" component={AppDrawerViews} />
        <Stack.Screen name="AppPlayingView" component={AppPlayingView} /> 
        <Stack.Screen name="AppAskUs" component={AppAskUs} />
        <Stack.Screen name="AppAnswer" component={AppAnswer} />
        <Stack.Screen name="AppContact" component={AppContact} />
        <Stack.Screen name="AppSoundset" component={AppSoundset} />
        <Stack.Screen name="AppNotification" component={AppNotification} />
        <Stack.Screen name="AppFind" component={AppFind} />
        <Stack.Screen name="AppCharge" component={AppCharge} />

  </Stack.Navigator>
    </NavigationContainer>
  );
}