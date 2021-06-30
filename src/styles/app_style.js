import { StyleSheet } from 'react-native'

const AppStyle = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center"
    },

    mainscreen: {
        flex:1,
        paddingLeft:10,
        paddingRight:10,
        // paddingTop:5,
        paddingTop: (Platform.OS === 'ios') ? 10 : 8
    },

    fontHeader: {
        fontSize: 38,
        fontWeight: 'bold',
        color:'black',
        fontFamily: 'FuturaSH-Medium'
    },

    fontSemiHeader: {
        fontSize: 25,
        color:'black',
        fontFamily: 'FuturaSH-Medium',
        fontWeight:'100'
    },
    fontSmall: {
        fontSize: 20,
        color:'black',
        fontFamily: 'FuturaSH-Medium'
    },
    fontxs: {
        fontSize: 15,
        color:'black',
        fontFamily: 'FuturaSH-Medium'
    },

    listfont: {
        fontSize: 18,
        color:'black',
        fontFamily: 'FuturaSH-Medium'
    },
    fontMedium: {
        fontSize: 20,
        color:'black',
        fontFamily: 'FuturaSH-Medium'
    },
    svg_logo: {
        height:150, 
        width:150,
        marginBottom:10
    },
    deviceInterfaceLogo: {
        height:100, 
        width:100,
        marginBottom:'13%'
    },
    nowplaying:{ 
        height: 50,
        width: 50,
        marginLeft:15,
        marginRight:15
    },
    touch:{
        width: '60%', 
        height: 60, 
        alignItems:'center',
    },
    start_button:{
        width:'80%',
        height:'80%',
    },
    pulse_container: {
        flex: 1, 
        justifyContent:'center', 
        alignItems:'center'
    },
    pulse: {
        height:10, 
        width:10, 
        marginTop:15, 
        backgroundColor:'black',
        borderRadius:20
    },
    mainscreenview: {
        flex: 1, 
        justifyContent:'center', 
        alignItems:'center'
    },
    close_only:{
        marginLeft:10,
        marginTop:10
    },
    back_button:{
        // marginLeft:10,
        marginTop:10
    },
    horizontalLine: {
        height:10, 
        width:'100%', 
        backgroundColor:'#e7e7e8', 
        marginBottom:12
    },
    textInput:{
        height: 50, 
        borderColor: 'red', 
        borderWidth: 0, 
        fontSize:18, 
        fontFamily:'FuturaSH-Medium'
    },
    finish:{
        fontSize:20, 
        marginTop:5, 
        fontFamily:'FuturaSH-Medium',

    },
    box:{
        height:40, 
        width:40, 
        marginRight:10,
        marginTop:10
    },
    sound_set_container: { 
        height:280, 
        width:70,  
        marginRight:0, 
        alignItems:'center'
    },
    askHeader: { 
        flexDirection:'row', 
        height:35
    },
    batteryHeader: {
        width:'100%', 
        height:'20%', 
        justifyContent:'center', 
        alignItems:'center', 
        flexDirection:'row', 
        marginTop:50
    },
    _verticalBattery: {
        height: 50, 
        width:50
    },
    _batteryFont: {
        marginLeft:10, 
        fontFamily:'FuturaSH-Medium', 
        fontSize:25, 
        marginTop:10
    },
    batteryContainer: {
        width:'100%', 
        height:'20%', 
        justifyContent:'center', 
        alignItems:'center', 
        flexDirection:'row', 
        marginTop:50
    },
    _playingContainer: {
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'center'
    },
    playingHeader: {
        flex:1, 
        justifyContent:'center', 
        alignItems:'center'
    },
    playingCenterLogo: {
        flexDirection:'row', 
        justifyContent:'space-between', 
        paddingTop:15
    },
    _playingIcon: {
        height:100, 
        width:100, 
        marginRight:40
    },
    _playingFullSize: {
        height:100, 
        width:100
    },
    techHeader: {
        flexDirection:'row', height:35
    },
    burgerDrawer: {
        width:15, height:15, marginTop:8
    },
    techLogo: {
        width:30, height:30, marginLeft:10
    },
    techTextHeader: {
        flex:2, justifyContent:'center', alignItems:'center'
    },
    techPlus: {
        width:15, height:15
    },
    techSoundOn: {
        marginTop:20, flexDirection:'row', justifyContent:'space-between'
    },
    sendsignal: {
        height:150, width:150
    }
    
})


const AppButton = StyleSheet.create({

});

export { AppStyle, AppButton }
