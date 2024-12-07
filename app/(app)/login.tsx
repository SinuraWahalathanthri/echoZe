import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  useColorScheme,
} from "react-native";
import React, { useState } from "react";
import { Link, router, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import PrimaryButton from "@/components/Buttons/PrimaryButton";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const colorScheme = useColorScheme(); // Get the current theme (light or dark)

  // Define colors based on the theme
  const backgroundColor = colorScheme === "dark" ? "#121212" : "#ffffff";
  const textColor = colorScheme === "dark" ? "#ffffff" : "#000000";
  const inputBorderColor = colorScheme === "dark" ? "#333333" : "#d4d4d4";
  const subText = colorScheme === "dark" ? "#d4d4d4" : "#555555";

  return (
    <SafeAreaView style={[{ flex: 1, backgroundColor }]}>
      <Stack.Screen options={{ headerTitle: "Log In", headerShown: true }} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Ionicons
            name="book-outline"
            size={50}
            color={textColor} // Change icon color based on theme
            style={{ marginBottom: 20 }}
          />
          <Text style={[styles.title, { color: textColor }]}>
            Login to your account
          </Text>
          <Text style={[styles.subtitle, { color: textColor }]}>
            Here you can login to your account.
          </Text>

          <View style={{ marginTop: 30 }}>
            {/* Form Fields */}
            {/* Email */}
            <View>
              <Text style={{ color: textColor }}>Email</Text>
              <TextInput
                style={{
                  borderColor: inputBorderColor,
                  borderWidth: 1,
                  borderRadius: 10,
                  marginTop: 5,
                  padding: 10,
                  color: textColor, // Text color for input
                }}
              />
            </View>
            {/* Password */}
            <View style={{ marginTop: 10 }}>
              <Text style={{ color: textColor }}>Password</Text>
              <View
                style={{
                  borderColor: inputBorderColor,
                  borderWidth: 1,
                  borderRadius: 10,
                  marginTop: 5,
                  flexDirection: "row",
                  width: "100%",
                  alignItems: "center",
                  paddingRight: 10,
                }}
              >
                <TextInput
                  style={{ flex: 1, padding: 10, color: textColor }}
                  secureTextEntry={!showPassword}
                />
                <Pressable onPress={() => setShowPassword(!showPassword)}>
                  <Ionicons
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                    size={20}
                    color={textColor}
                  />
                </Pressable>
              </View>
            </View>

            {/* Submit Button */}
            <View style={{ marginTop: 25 }}>
              <Link href="/(tabs)" asChild>
                <PrimaryButton
                  onPress={null} // You can update the destination route here
                  text="Sign In"
                  style={{ marginTop: 25, }}
                />
              </Link>
            </View>

            {/* Register Redirect Button */}
            <View style={{ marginTop: 2 }}>
              <Pressable
                onPress={() => router.replace("/register")}
                style={{
                  backgroundColor:
                    colorScheme === "dark" ? "#121212" : "#ffffff",
                  padding: 15,
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    color: subText,
                    textAlign: "center",
                    fontWeight: 400,
                    fontSize: 15,
                  }}
                >
                  Not Registered? Sign Up
                </Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  title: {
    fontWeight: "700",
    fontSize: 40,
  },
  subtitle: {
    fontSize: 15,
    marginTop: 14,
  },
  button: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    marginTop: 25,
    borderRadius: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "600",
  },
  logoWrapper: {
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 140,
    resizeMode: "contain",
  },
});
