import React, { Component }  from 'react';
import { ImageBackground, StyleSheet, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

class AppContainer extends Component {
    render() {
        return (
        <SafeAreaView>
            <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
                <View>
                    <ImageBackground source={require('../assets/AppBG.png')} style={styles.backgroundImage}>
                        {this.props.children}
                    </ImageBackground>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    backgroundImage:{
        width: '100%', 
        height: '100%'
      },
});

export default AppContainer;