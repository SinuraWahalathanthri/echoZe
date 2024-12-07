import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const index = () => {
  const [message, setMessage] = useState(""); // State to track input text

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ width: "100%", alignItems: "flex-end" }}>
            <View
              style={{
                width: "50%",
              }}
            >
              <View
                style={{
                  backgroundColor: "#d0fecf",
                  padding: 10,
                  borderRadius: 15,
                  
                }}
              >
                <Text>Hello Text</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: 5,
                  }}
                >
                  <Text style={{ fontSize: 11, color: "gray" }}>11:59</Text>
                  <Ionicons
                    name="checkmark-done-sharp"
                    size={15}
                    color={"#0898fb"}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <KeyboardAvoidingView style={styles.inputContainer}>
        <Ionicons name="add" size={28} color={"#111111"} />
        <TextInput
          style={styles.textInput}
          multiline
          value={message}
          onChangeText={setMessage} // Update the state as the user types
          placeholder="Type a message..."
        />
        {message.trim() ? ( // If there is text, show the send icon
          <Pressable
            onPress={() => {
              console.log("Send message:", message);
              setMessage(""); // Clear the input after sending
            }}
          >
            <MaterialCommunityIcons
              name="send-circle"
              size={35}
              color="#17c65f"
            />
          </Pressable>
        ) : (
          <>
            <Ionicons name="camera-outline" size={28} color={"#111111"} />
            <Ionicons name="mic-outline" size={28} color={"#111111"} />
          </>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#f4f4f4",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  textInput: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 15,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: "#ebebeb",
    maxHeight: 120, // Limit height for multiline
  },
});
