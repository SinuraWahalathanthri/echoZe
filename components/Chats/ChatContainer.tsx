import { Link } from "expo-router";
import {
  Image,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  Pressable,
  FlatList,
  TouchableOpacity,
} from "react-native";

const ChatContainer = ({ chats }) => {
  const colorScheme = useColorScheme();

  // Define theme colors
  const colors = {
    light: {
      background: "#ffffff",
      primaryText: "#000000",
      secondaryText: "#666666",
      badgeBackground: "#17c65f",
      badgeText: "#ffffff",
      time: "#007b00", // Green for unread messages
      timeNoUnread: "#999999", // Gray for no unread messages
    },
    dark: {
      background: "#121212",
      primaryText: "#ffffff",
      secondaryText: "#979797",
      badgeBackground: "#17c65f",
      badgeText: "#000000",
      time: "#17c65f", // Green for unread messages
      timeNoUnread: "#666666", // Gray for no unread messages
    },
  };

  const theme = colors[colorScheme];

  const renderItem = ({ item }) => (
    <Link href="/(chat)" asChild>
      <TouchableOpacity
        style={[styles.chatContainer, { borderColor: theme.secondaryText }]}
      >
        {/* Left Section */}
        <View style={styles.leftSection}>
          <Image
            source={require("../../assets/images/avatar.png")}
            style={styles.avatar}
          />
          <View style={styles.textSection}>
            <Text style={[styles.name, { color: theme.primaryText }]}>
              {item.name}
            </Text>
            <Text style={[styles.message, { color: theme.secondaryText }]}>
              {item.message}
            </Text>
          </View>
        </View>

        {/* Right Section */}
        <View style={styles.rightSection}>
          <Text
            style={[
              styles.time,
              {
                color: item.unreadCount > 0 ? theme.time : theme.timeNoUnread,
              },
            ]}
          >
            {item.time}
          </Text>
          {item.unreadCount > 0 && (
            <Pressable
              style={[styles.badge, { backgroundColor: theme.badgeBackground }]}
            >
              <Text style={[styles.badgeText, { color: theme.badgeText }]}>
                {item.unreadCount}
              </Text>
            </Pressable>
          )}
        </View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <FlatList
      data={chats}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ChatContainer;

const styles = StyleSheet.create({
  chatContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 10, // Add padding
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 100,
    marginRight: 10,
  },
  textSection: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 3,
    textAlignVertical: "center", // Android alignment fix
  },
  message: {
    fontSize: 14,
    color: "#666666",
    textAlignVertical: "center", // Android alignment fix
    numberOfLines: 1, // Truncate if too long
    ellipsizeMode: "tail",
  },
  rightSection: {
    alignItems: "flex-end",
    justifyContent: "center", // Center align in Android
  },
  time: {
    fontSize: 14,
    marginBottom: 5,
    color: "#007b00", // Green for unread messages
  },
  badge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 20,
    backgroundColor: "#17c65f",
  },
  badgeText: {
    fontSize: 12,
    color: "#ffffff",
  },
});

