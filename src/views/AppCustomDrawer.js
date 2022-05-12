
import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Logo } from '../utilities/svgroup'
import { ApplicationBackPress } from '../utilities/helperTools';
import { Platform } from "react-native";

function AppCustomDrawer({ ...props }){
  // ApplicationBackPress (props, 'AppCustomize');

    return(
    <View style={styles.container}>
        <ScrollView>
          
          <TouchableOpacity onPress={() => props.navigation.navigate('AppDrawerViews', {'screen': 'tech', 'name': 'tech.tools'})}>
            <View style={{ marginTop:10 }}>
              <Text style={styles.navItemStyle}>
                  + tech.tools
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.navigation.navigate('AppDrawerViews', {'screen': 'shop', 'name': 'shop.tech'})}>
            <View style={{ marginTop:10 }}>
              <Text style={styles.navItemStyle}>
                  + shop.tech
              </Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => props.navigation.navigate('AppDrawerViews', {'screen': 'about', 'name': 'about.us'}) }>
            <View style={{ marginTop:10 }}>
              <Text style={styles.navItemStyle}>
                  + about.us
              </Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => props.navigation.navigate('AppDrawerViews', {'screen': 'contact', 'name': 'contact.us'}) }>
            <View style={{ marginTop:10 }}>
              <Text style={styles.navItemStyle}>
                + contact.us
              </Text>
            </View>
          </TouchableOpacity>

        
        </ScrollView>
        
        <View style={styles.footerContainer}>
          <Logo style={{ height:80, width:80}} color="#fff"></Logo>
        </View>
      
      </View>
            
    

        
    );
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 32,
        flex: 1,
        backgroundColor:'#211e1e'
      },
      navItemStyle: {
        padding: 8,
        fontFamily:'FuturaSH-Medium',
        fontSize: Platform.OS==='ios'? 42 : 32,
        color: '#fff',
        marginLeft: 15,
        fontWeight: 'bold'
      },
      sectionHeadingStyle: {
        paddingVertical: 10,
        paddingHorizontal: 5
      },
      footerContainer: {
        padding: 20,
        backgroundColor: '#211e1e',
        color:'#fff',
        marginLeft:10
      }

});
export default AppCustomDrawer;