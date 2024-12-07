import {
  ActivityIndicator,
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

const register = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to toggle confirm password visibility

  const colorScheme = useColorScheme(); // Get the current theme (light or dark)

  // Set color values based on the current theme
  const backgroundColor = colorScheme === "dark" ? "#121212" : "#ffffff";
  const textColor = colorScheme === "dark" ? "#ffffff" : "#000000";
  const inputBorderColor = colorScheme === "dark" ? "#333333" : "#d4d4d4";
  const subText = colorScheme === "dark" ? "#d4d4d4" : "#555555";
  const buttonColor = colorScheme === "dark" ? "#141718" : "#141718"; // Same color for both light and dark modes for button
  const buttonTextColor = colorScheme === "dark" ? "#ffffff" : "#ffffff";

  const handleLoginRedirect = () => {
    setLoading(true);
    router.replace("/login");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: backgroundColor }}>
      <Stack.Screen options={{ headerTitle: "Register", headerShown: true }} />
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
          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color={textColor} />
              <Text style={{ color: textColor }}>Loading...</Text>
            </View>
          ) : (
            <>
              <Ionicons
                name="lock-closed-outline"
                size={50}
                color={textColor}
                style={{ marginBottom: 20 }}
              />
              <Text style={[styles.title, { color: textColor }]}>
                Register new account
              </Text>
              <Text style={[styles.subtitle, { color: subText }]}>
                Here you can create a new account for yourself.
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
                      color: textColor,
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
                {/* Confirm Password */}
                <View style={{ marginTop: 10 }}>
                  <Text style={{ color: textColor }}>Confirm Password</Text>
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
                      secureTextEntry={!showConfirmPassword}
                    />
                    <Pressable
                      onPress={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      <Ionicons
                        name={
                          showConfirmPassword
                            ? "eye-off-outline"
                            : "eye-outline"
                        }
                        size={20}
                        color={textColor}
                      />
                    </Pressable>
                  </View>
                </View>

                {/* Submit Button */}
                <View style={{ marginTop: 25 }}>
                  <PrimaryButton
                    text={"Register"}
                    onPress={null}
                    style={{
                      backgroundColor: buttonColor,
                      marginTop: 25,
                    }}
                  />
                </View>
                {/* Login Redirect Button */}
                <View style={{ marginTop: 2 }}>
                  <Pressable
                    onPress={handleLoginRedirect}
                    style={{
                      backgroundColor: backgroundColor,
                      padding: 15,
                      borderRadius: 10,
                    }}
                  >
                    <Text
                      style={{
                        color: subText,
                        textAlign: "center",
                        fontWeight: "400",
                        fontSize: 15,
                      }}
                    >
                      Already have an account? Login
                    </Text>
                  </Pressable>
                </View>
              </View>
            </>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default register;

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
    backgroundColor: "#141718",
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
