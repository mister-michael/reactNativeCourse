import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';
import {MaterialCommunityIcons} from "@expo/vector-icons"

function AccountListItem({color, text, icon}) {
    return (
        <View style={styles.container}>
            <View style={[styles.iconContainer, {backgroundColor: color}]}>
                <MaterialCommunityIcons name={icon} size={20} color={"white"}/>
            </View>
            <Text>{text}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors. white
    },
    iconContainer: {
        height: 50,
        width: 50,
        borderRadius: 35,
        margin: 15,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default AccountListItem;