
import React  from 'react';
import { StyleSheet, View } from 'react-native';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; 

const GoogleMap = () => {
    return(
        <View style={[styles.container, { flexDirection: "column" }]}>
            <View style={{ flex: 2, backgroundColor: "red" }}> 
                <MapView
                  provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                  style={styles.map}
                  region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                  }}>
                </MapView>
            </View>
            <View style={{ flex: 1, backgroundColor: "darkorange" }} />
        </View>
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
      },
    map: {
        flex:1
    },
    backgroundImage:{
        width: '100%', 
        height: '100%'
      },
});

export default GoogleMap