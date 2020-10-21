import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import ListingEditScreen from "./app/screens/ListingEditScreen";
import Screen from "./app/components/Screen";
import { Button, Image } from "react-native";
import ImageInput from "./app/components/ImageInput";

export default function App() {
  const [imageUri, setImageUri] = useState();
  const requestPermission = async () => {
    // const result = Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.LOCATION)
    //Same thing
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library");
  };

  useEffect(async () => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.cancelled) setImageUri(result.uri);
    } catch (error) {
      console.log("error reading an image");
    }
  };

  return (
    <Screen>
      {/* <ImageInput
        imageUri={imageUri}
        onChangeImage={(uri) => setImageUri(uri)}
        selectImage={selectImage}
      /> */}
      <Button title="Select Image" onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      <ImageInput imageUri={imageUri}/>
    </Screen>
  );
}
