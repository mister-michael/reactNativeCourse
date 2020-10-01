import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import ListingEditScreen from "./app/screens/ListingEditScreen";
import Screen from "./app/components/Screen";

export default function App() {
  const requestPermission = async () => {
    // const result = Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.LOCATION)
    //Same thing
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library");
  };

  useEffect(async () => {
    requestPermission();
  }, []);

  return <Screen></Screen>;
}
