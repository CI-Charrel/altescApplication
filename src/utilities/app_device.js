import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { Badge } from "react-native-elements";
import { Burger, Logo, Plus, Trash, Edit } from "./svgroup";
import { AppStyle } from "../styles/app_style";
import { useDispatch } from "react-redux";
import * as DeviceAction from "../core/actions/device-action";
const AppDevice = (props) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  return (
    <>
      <View style={{ marginTop: 20 }} key={props.device.id}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginTop: 6, marginRight: 5 }}>
              {props.device.isConnected ? (
                <Badge status="success" />
              ) : (
                <Badge status="warning" />
              )}
            </View>
            <Text style={[AppStyle.fontSmall, { paddingRight: 30 }]}>
              {props.device.name}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.reset({
                  index: 0,
                  routes: [
                    {
                      name: "AppCustomize",
                      params: { ...props.device, screen: "appTechTools" },
                    },
                  ],
                });
              }}
            >
              <Edit style={{ paddingRight: 45 }}></Edit>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                dispatch(DeviceAction.deleteDevice(props.device.id))
              }
            >
              <Trash></Trash>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          {open ? (
            <TouchableOpacity
              onPress={() => props.navigation.navigate("AppPlayingView")}
            >
              <Image
                style={{ width: "100%", height: 410 }}
                source={require("../assets/headset_red.png")}
                onPress={() => alert("sample")}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setOpen(true)}>
              <Image
                style={{ width: "100%", height: 80 }}
                source={require("../assets/pair.png")}
                onPress={() => alert("sample")}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};

export default AppDevice;
