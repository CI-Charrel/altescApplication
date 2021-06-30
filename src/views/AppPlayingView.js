import React, { useEffect } from 'react';
import { View, Text, BackHandler } from 'react-native';
import { AppStyle } from '../styles/app_style'
import { Battery, NowPlayingIcon, Find, ChargeIcon, Info, Notify, Sound, BackIcon } from '../utilities/svgroup'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { backNavigation } from '../utilities/helperTools';
import { AppNavigate } from '../utilities/app_navigation'
import AppContainer from './AppContainerView';

const AppPlayingView = (props) => {

    useEffect(() => {
        const screen = 'AppTechTools';
        const backhandler = BackHandler.addEventListener('hardwareBackPress', () => backNavigation(props, screen));
        return () => backhandler.remove();
      },[])

    return (
        <AppContainer>
            <View style={AppStyle.mainscreen}>
                <View style={{ flexDirection:'row', height:35, justifyContent:'space-between'}}>

                    <View><TouchableOpacity onPress={() => props.navigation.goBack(null) }>
                        <BackIcon style={AppStyle.back_button} />
                    </TouchableOpacity></View>
                    <View style={{ marginLeft:25}}><Text style={AppStyle.fontSemiHeader}>now.playing</Text></View>
                    <View>
                        <TouchableOpacity onPress={() => props.navigation.navigate('AppAskUs')}>
                            <View style={{ marginTop:5}}><Info></Info></View>
                        </TouchableOpacity>
                    </View>
                    {/* <View style={AppStyle.playingHeader}>
                        <Text style={AppStyle.fontSemiHeader}>now.playing</Text>
                    </View>
                    <TouchableOpacity onPress={() => props.navigation.navigate('AppAskUs')}>
                        <View style={{ marginTop:5}}><Info></Info></View>
                    </TouchableOpacity> */}
                </View>
                <View style={AppStyle.playingCenterLogo}>
                    <Text style={AppStyle.fontSmall}>connected</Text>
                    <Battery style={{ marginTop:-6}}></Battery>
                </View>

                <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
                    <NowPlayingIcon style={AppStyle._playingFullSize}></NowPlayingIcon>
                    <View><Text style={AppStyle.fontHeader}>sound.on</Text></View>
                </View>

                <View style={{ flex:2 }}>
                    <View style={AppStyle._playingContainer}>
                        <ChargeIcon style={AppStyle._playingIcon} onPress={ () => AppNavigate(props, 'AppCharge')}></ChargeIcon>
                        <Find style={AppStyle._playingFullSize}  onPress={ () => AppNavigate(props, 'AppFind')} ></Find>
                    </View>
                    <View style={[AppStyle._playingContainer, {marginTop:40}]}>
                        <Sound style={AppStyle._playingIcon} onPress={ () => AppNavigate(props, 'AppSoundset')}></Sound>
                        <Notify style={AppStyle._playingFullSize}  onPress={ () => AppNavigate(props, 'AppNotification')} ></Notify>
                    </View>
                </View>
            </View> 
        </AppContainer>

  );
}


export default AppPlayingView;