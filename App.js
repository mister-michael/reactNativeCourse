// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import { TextInput, Text, Switch } from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

export default function App() {
const [isNew, setIsNew] = useState(false);

  return (
    <>
      <Screen>
        <AppPicker icon="apps" placeholder="category" />
        <AppTextInput icon="email" placeholder="email"/>
      </Screen>
    </>
  );
}
