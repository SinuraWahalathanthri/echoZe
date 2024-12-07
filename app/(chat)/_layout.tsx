import React from "react";
import { StyleSheet, TouchableOpacity, useColorScheme, View } from "react-native";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import AvatarComponent from "@/components/Chats/AvatarComponent";

export default function AppLayout() {
  const colorScheme = useColorScheme(); // This hook detects the current theme (light or dark)

  // Define colors based on the theme
  const headerTintColor = colorScheme === "dark" ? "white" : "black";

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Sinura",
          headerTintColor, // Dynamically set the color
          headerRight: () => (
            <View style={styles.headerContainer}>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="call-outline" size={23} color={"#000000"} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="videocam-outline" size={28} color={"#000000"} />
              </TouchableOpacity>
            </View>
          ),
          headerLeft: () => (
            <AvatarComponent
              imageUrl={"../../assets/images/avatar.png"}
              name={"Sinura"}
              size={45}
              style={[styles.image1, { marginLeft: 10 }]}
            />
          ),
          headerBackVisible: true,
          navigationBarColor: "#f4f4f4",
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconButton: {
    marginLeft: 10,
  },
  image1: {
    borderRadius: 100,
    marginRight: 10,
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
  },
});
