import React from "react";
import { Button, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Screen from "./app/components/Screen";

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button
      title="click"
      //optional second parameter, object with key value pairs
      //we can access this object in the target Screen using route.params.'key'
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
    />
  );
};

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets </Text>
    <Link />
  </Screen>
);
const TweetDetails = ({ route }) => (
  //route is not available to child component
  //in that case we would useRoute() to get access to the route method
  //  like we did with useNavigation() above
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    //screenOptions is defining the header style for child .Screens that don't have their own options prop defined
    screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen
      name="Tweets"
      component={Tweets}
      options={{
        //headerStyle takes a style object
        headerStyle: { backgroundColor: "tomato" },
        headerTintColor: "white",
        headerShown: false,
        //find more options props in documentation
        //reactnavigation.org Navigators/createStacknavigator/options
      }}
    />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      //options can equal or title, or pass a function which returns an object with a title key
      //because you want to return an object, wrap the object in parentheses
      options={({ route }) => ({ title: route.params.id })}
    />
  </Stack.Navigator>
);

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={Tweets} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
