// import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import { TextInput, Text } from "react-native";

export default function App() {

  const [firstName, setFirstName] = useState('')

  return (
    <>
     <Screen>
       <Text>{firstName}</Text>
    <TextInput 
    maxLength={5}
    keyboardType="numeric"
    clearButtonMode="always" //only works on ios
    secureTextEntry={true} //for boolean props, merely naming the prop sets it to true
    placeholder="First Name"
    onChangeText={(text) => setFirstName(text)}
    style={{
      borderBottomColor: "#ccc",
      borderBottomWidth: 1,
    }}
    />
     </Screen>
    </>
  );
}
