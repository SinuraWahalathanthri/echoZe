import React from "react";
import { useColorScheme } from "react-native";
import { Stack } from "expo-router";

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
          headerTitle: " ",
          headerTintColor, // Dynamically set the color
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          headerTitle: "Register",
          headerTintColor, // Dynamically set the color
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          headerTitle: "Login",
          headerTintColor, // Dynamically set the color
        }}
      />
    </Stack>
  );
}
