import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Inter: require("../assets/fonts/Inter_18pt-Regular.ttf")
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerShadowVisible: false,
          headerTitleAlign: "center",
          headerShown: false,
          navigationBarColor: "#ffffff",
        }}
      >
        {/* Root screen (index.tsx) */}
        <Stack.Screen
          name="index"
          options={{
            headerShown: true,
            headerTitle: "Welcome",
            headerTitleAlign: "center",
          }}
        />
        {/* Register screen */}
        <Stack.Screen
          name="register"
          options={{
            headerShown: true,
            headerTitle: "Register",
            headerTitleAlign: "center",
          }}
        />
        {/* Login screen */}
        <Stack.Screen
          name="login"
          options={{
            headerShown: true,
            headerTitle: "Login",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen name="(home)/index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(chat)/index" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
