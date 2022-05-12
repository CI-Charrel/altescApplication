import React from "react";
import { View, Text } from "react-native";
import { AppStyle } from "../styles/app_style";
import Logo from "../svg/Logo";

const shopTechDrawerStr = () => {
  const response = (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        <Text style={AppStyle.fontSemiHeader}> www.altesc.tech/shop</Text>
      </View>
    </View>
  );
  return response;
};

const techToolsDrawerStr = () => {
  const response = (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        <Text style={AppStyle.fontSemiHeader}> www.altesc.tech/tools</Text>
      </View>
    </View>
  );
  return response;
};

const aboutUsDrawerStr = () => {
  const response = (
    <View
      style={{
        marginTop: "20%",
        alignItems: "center",
        marginRight: 10,
        marginLeft: 10,
      }}
    >
      <Logo
        name="App Logo"
        style={{ height: 100, width: 100 }}
        color="#000"
      ></Logo>
      <Text style={[AppStyle.fontRegular, { marginTop: 30 }]}>
        wearable solutions for the struggles we face in this tech life. inspired
        by a desire to carryless we blend technology with everyday items to
        create the objects needed for mobile survival.
      </Text>

      <Text style={[AppStyle.fontRegular, { marginTop: 20 }]}>
        founded in venice//ca
      </Text>
    </View>
  );

  return response;
};

const contactUsDrawerStr = () => {
  const response = (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        <Text style={AppStyle.fontSemiHeader}> www.altesc.tech/contact</Text>
      </View>
    </View>
  );

  return response;
};

const drawerView = (viewname) => {
  const viewKeys = {
    shop: shopTechDrawerStr(),
    tech: techToolsDrawerStr(),
    about: aboutUsDrawerStr(),
    contact: contactUsDrawerStr(),
  };
  return viewKeys[viewname];
};

export { drawerView };
