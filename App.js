import React from "react";
import { Button, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import Screen from "./app/components/Screen";

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button 
    title="click"
    //optional second parameter, object with key value pairs
    //we can access this object in the target Screen using route.params.'key'
    onPress={()=> navigation.navigate("TweetDetails", {id: 1})}/>
  )
}

const Tweets = ({navigation}) => (
  <Screen>
    <Text>Tweets </Text>
    <Link />
  </Screen>
);
const TweetDetails = ({route}) => (
  //route is not available to child component
  //in that case we would useRoute() to get access to the route method
  //  like we did with useNavigation() above
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets}/>
    <Stack.Screen name="TweetDetails" component={TweetDetails}/>
  </Stack.Navigator>
)

export default function App() {
 return (
   <NavigationContainer>
     <StackNavigator />
   </NavigationContainer>
 )
}
