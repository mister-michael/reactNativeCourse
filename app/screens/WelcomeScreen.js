import React from "react";
import { Text, ImageBackground, StyleSheet, View, Image } from "react-native";
import AppButton from "../components/button/AppButton";
import colors from "../config/colors.js";

function WelcomeScreen(props) {
  return (
    <ImageBackground
    blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          onPress={() => console.log("TAPPED")}
          title="login"
        ></AppButton>
        <AppButton
          onPress={() => console.log("TAPPED")}
          title="register"
          color="secondary"
        ></AppButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  }
});

export default WelcomeScreen;
