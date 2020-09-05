import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import AccountListItem from "../components/AccountListItem";

function MyAccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <ListItem 
      style={styles.listItem}
      title={"Mosh the Guy"}
      subTitle={"mosh@mosh.com"}
      image={require("../assets/mosh.jpg")}/>

    <View style={styles.myContainer}>
        <AccountListItem icon={"trash-can"}text={"My Listings"} color={colors.danger}/>
        <AccountListItem icon={"trash-can"}text={"My Listings"} color={colors.secondary}/>
    </View>
      <AccountListItem icon={"trash-can"}text={"My Listings"} color={"goldenrod"}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: colors.black
    },
    myContainer: {
        paddingTop: 20,
        paddingBottom: 20
    },
    screen: {
        backgroundColor: colors.black
    },
    userContainer: {
        flexDirection: "row",
    }
});

export default MyAccountScreen;
