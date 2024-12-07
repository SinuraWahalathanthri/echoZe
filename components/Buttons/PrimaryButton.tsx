import React, { forwardRef } from "react";
import { Pressable, Text, StyleSheet, useColorScheme } from "react-native";

// Use forwardRef to allow the component to receive refs
const PrimaryButton = forwardRef(({ onPress, text, style, textStyle }, ref) => {
  const colorScheme = useColorScheme(); // Detect the current theme (light or dark)

  // Define colors based on the theme
  const buttonColor = colorScheme === "dark" ? "#f3f3f3" : "#141718"; // Button background color
  const textColor = colorScheme === "dark" ? "#141718" : "#f3f3f3"; // Text color remains white for both modes

  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, { backgroundColor: buttonColor }, style]}
      ref={ref}
    >
      <Text style={[styles.text, { color: textColor }, textStyle]}>{text}</Text>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 13,
    paddingVertical:18
  },
  text: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 15,
  },
});

export default PrimaryButton;
