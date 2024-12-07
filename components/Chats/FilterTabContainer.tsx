import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const FilterTabContainer = () => {
  const tabs = ["All", "Unread", "Favorites", "Groups", "+"];

  const handleTabPress = (tab) => {
    console.log(`${tab} pressed`);
  };
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleTabPress(tab)}
          style={[
            styles.tab,
            tab === "All" && styles.activeTab, // Highlight the "All" tab as active
          ]}
        >
          <Text style={[styles.tabText, tab === "All" && styles.activeTabText]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default FilterTabContainer;

const styles = StyleSheet.create({
  scrollContainer: {
    marginTop: 15,
  },
  tab: {
    backgroundColor: "#333",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  activeTab: {
    backgroundColor: "#0e3326", // Dark green for the active tab
  },
  tabText: {
    color: "#919191",
    fontSize: 16,
    fontWeight: "bold",
  },
  activeTabText: {
    color: "#b8dac3",
    fontWeight: "bold",
  },
});
