import React from "react";
import {StyleSheet} from "react-native";
import { View } from "react-native";
import Icon from "./Icon";
import AppText from "./AppText";

//PickerItem
function CategoryPickerItem(item, onPress) {
    console.log(item.item.backgroundColor)
  return (
    <View style={styles.container}>
      <Icon backgroundColor={item.item.backgroundColor} name={item.item.icon} size={80}/>
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      paddingHorizontal: 20,
      paddingVertical: 15,
      alignItems: "center",
      width: "33%"
  },
  label: {
      marginTop: 5
  }
});

export default CategoryPickerItem;
