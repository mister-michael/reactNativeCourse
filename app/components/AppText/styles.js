import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    fontSize: 100,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default styles