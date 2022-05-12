import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  BackHandler,
  ScrollView,
} from "react-native";
import { AppStyle } from "../styles/app_style";
import { Burger, Logo, Plus, Trash, Edit } from "../utilities/svgroup";
import { Badge } from "react-native-elements";
import { backNavigation } from "../utilities/helperTools";
import { AppNavigate } from "../utilities/app_navigation";
import AppContainer from "./AppContainerView";
import { useDispatch, useSelector } from "react-redux";
import AppDevice from "../utilities/app_device";
const AppTechTools = (props) => {
  const data = useSelector((state) => state.device);
  useEffect(() => {
    const screen = "AppCustomize";
    const backhandler = BackHandler.addEventListener("hardwareBackPress", () =>
      backNavigation(props, screen)
    );
    return () => backhandler.remove();
  }, []);

  return (
    <AppContainer>
      <View style={AppStyle.mainscreen}>
        <View style={AppStyle.techHeader}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
              <Burger style={AppStyle.burgerDrawer} />
            </TouchableOpacity>
            <Logo style={AppStyle.techLogo} color="#000" />
          </View>

          <View style={AppStyle.techTextHeader}>
            <View>
              <Text style={AppStyle.fontSemiHeader}>tech.tools</Text>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <View></View>
            <TouchableOpacity
              onPress={() => AppNavigate(props, "AppSearchView")}
            >
              <Plus style={AppStyle.techPlus} />
            </TouchableOpacity>
          </View>
        </View>

        {/* list of headset devices */}
        <ScrollView>
          {data.devices.map((device) => (
            <AppDevice {...props} device={device} key={device.id} />
          ))}
        </ScrollView>

        {/* end of region */}
      </View>
    </AppContainer>
  );
};

export default AppTechTools;
