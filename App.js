// import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Card from "./app/components/Card";

export default function App() {
  return (
    <>
      {/* <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      <MaterialCommunityIcons name="email" size={200} color="dodgerblue" />
      <AppText>I love SHIT</AppText>
      </View> */}
      {/* <WelcomeScreen></WelcomeScreen> */}
      <View
      style={{
        backgroundColor: '#f8f4f4',
        padding: 20,
        paddingTop: 20,
      }}>
        <Card
          title="look at this shit"
          subTitle="$100"
          image={require("./app/assets/chair.jpg")}
        />
      </View>
    </>
  );
}
