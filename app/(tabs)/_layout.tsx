import { Tabs } from "expo-router";
import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  // Define the icon color based on the current theme
  const iconColor = colorScheme === "dark" ? "#ffffff" : "#0a0a0a";
  const tabBarBadgeStyle = colorScheme === "dark" ? "#17c65f" : "#17c65f";
  const headerIconMore = colorScheme === "dark" ? "#22b866" : "#17c65f";

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute", // For iOS, use transparent background to show blur
          },
          default: {},
        }),
        headerShadowVisible: false,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Chats",
          headerTitle: "Chats",

          headerLeft: () => (
            <View style={styles.headerContainer}>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons
                  name="ellipsis-horizontal-circle-sharp"
                  size={28}
                  color={iconColor}
                />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View style={styles.headerContainer}>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons name="camera" size={23} color={iconColor} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Ionicons
                  name="add-circle"
                  size={28}
                  color={headerIconMore}
                />
              </TouchableOpacity>
            </View>
          ),
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={28}
              name={focused ? "chatbubbles" : "chatbubbles-outline"}
              color={focused ? iconColor : "#9b9c9d"}
            />
          ),
          tabBarBadge: 3,
          tabBarBadgeStyle: {
            backgroundColor: tabBarBadgeStyle,
            color: "#ffffff",
          },
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              size={28}
              name={focused ? "cog" : "cog-outline"}
              color={focused ? iconColor : "#9b9c9d"} // Black when focused, iconColor when not focused
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems:'center'
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  iconButton: {
    padding: 8,
    borderRadius: 8,
  },
});
