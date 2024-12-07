import React from "react";
import { useColorScheme } from "react-native";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { Link } from "expo-router";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

const WelcomeScreen = () => {
  const colorScheme = useColorScheme(); // Hook to detect the current theme (light or dark)

  // Define colors based on the current theme
  const backgroundColor = colorScheme === "dark" ? "#121212" : "#ffffff"; // Dark mode: dark background, light mode: white background
  const textColor = colorScheme === "dark" ? "#ffffff" : "#000000"; // Dark mode: white text, light mode: black text
  const subtitleColor = colorScheme === "dark" ? "#cccccc" : "#555555"; // Light text for dark mode

  // Define image based on the current theme
  const logoImage =
    colorScheme === "dark"
      ? require("../../assets/images/home-dark.png") // Dark mode logo
      : require("../../assets/images/home.png"); // Light mode logo

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <View style={styles.contentWrapper}>
        <View style={styles.logoWrapper}>
          <Image source={logoImage} style={styles.logo} />
        </View>
        <Text style={[styles.title, { color: textColor }]}>Welcome to</Text>
        <Text style={[styles.title, { color: textColor }]}>echoze</Text>
        <Text style={[styles.subtitle, { color: subtitleColor }]}>
          Get started to ride a new adventure for a whole new world with your
          friends
        </Text>
        <Link href="/(app)/login" asChild>
          <PrimaryButton
            text="Get Started"
            style={styles.button}
            onPress={null}
          />
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  contentWrapper: {
    width: "85%",
  },
  logoWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 350,
    height: 350,
    resizeMode: "contain",
  },
  title: {
    fontWeight: "700",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Inter",
  },
  subtitle: {
    fontSize: 15,
    marginTop: 14,
    textAlign: "center",
  },
  button: {
    marginTop: 25,
  },
});
