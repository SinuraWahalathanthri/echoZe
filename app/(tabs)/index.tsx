import {
  StyleSheet,
  Platform,
  SafeAreaView,
  useColorScheme,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import ChatContainer from "@/components/Chats/ChatContainer";
import FilterTabContainer from "@/components/Chats/FilterTabContainer";
import { Link, useNavigation } from "expo-router";

export default function HomeScreen() {
  const colorScheme = useColorScheme();

  // Define theme colors
  const colors = {
    light: {
      background: "#ffffff",
      primaryText: "#000000",
      secondaryText: "#666666",
      inputBackground: "#f0f0f0",
      inputText: "#000000",
      icon: "#666666",
    },
    dark: {
      background: "#0a0a0a",
      primaryText: "#ffffff",
      secondaryText: "#979797",
      inputBackground: "#222222",
      inputText: "#ffffff",
      icon: "#999999",
    },
  };

  const theme = colors[colorScheme];

  const chats = [
    {
      id: 1,
      name: "Thaththi ❤️ 👑",
      message: "https://www.facebook.com/share/v/...",
      time: "11:51 AM",
      unreadCount: 1,
    },
    {
      id: 2,
      name: "Amma 👩‍👧‍👦",
      message: "Dinner is ready!",
      time: "11:45 AM",
      unreadCount: 0,
    },
  ];

  const tabs = ["All", "Unread", "Favorites", "Groups", "+"];

  const handleTabPress = (tab) => {
    console.log(`${tab} pressed`);
  };

  const renderHeader = () => (
    <View style={{ marginTop: 10, marginBottom: 15 }}>
      <Text
        style={{
          color: theme.primaryText,
          fontWeight: "bold",
          fontSize: 40,
        }}
      >
        Chats
      </Text>
      <KeyboardAvoidingView
        style={{
          flexDirection: "row",
          backgroundColor: theme.inputBackground,
          alignItems: "center",
          padding: 8,
          borderRadius: 10,
          gap: 5,
          marginTop: 10,
        }}
      >
        <Ionicons name="search" size={20} color={theme.icon} />
        <TextInput
          placeholder="Search"
          placeholderTextColor={theme.secondaryText}
          style={{ fontSize: 20, flex: 1, color: theme.inputText }}
        />
      </KeyboardAvoidingView>
      <FilterTabContainer />
    </View>
  );

  const renderItem = ({ item }) => (
      <ChatContainer chats={[item]} />
  );

  return (
    <SafeAreaView style={{ backgroundColor: theme.background, flex: 1 }}>
      <FlatList
        data={chats}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={{
          paddingBottom: 20, // Add some padding for the end of the list
          width: "95%",
          alignSelf: "center",
        }}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 0.6,
              width: "83%",
              alignSelf: "flex-end",
              backgroundColor: colorScheme === "dark" ? "#191919" : "#e8e8e8",
            }}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
