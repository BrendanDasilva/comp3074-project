import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import placeholder from "../assets/placeholder.png";
import milkywayshakes from "../assets/milkywayshakes.png";
import map from "../assets/map.png";

const RestaurantScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Text style={styles.backButtonText}>&lt; Back</Text>
      </TouchableOpacity>

      {/* Main Image */}
      <Image source={milkywayshakes} style={styles.mainImage} />

      {/* Title Section */}
      <View style={styles.titleSection}>
        <Text style={styles.restaurantTitle}>MILKY WAY SHAKES</Text>
        <Text style={styles.restaurantDescription}>
          Specializing in Milk Shakes that are out of this world
        </Text>
        <View style={styles.iconRow}>
          <Image source={placeholder} style={styles.icon} />
          <Image source={placeholder} style={styles.icon} />
          <Image source={placeholder} style={styles.icon} />
          <Image source={placeholder} style={styles.icon} />
        </View>
      </View>

      {/* Featured Items Section */}
      <Text style={styles.sectionTitle}>FEATURED</Text>
      <View style={styles.featuredRow}>
        <Image source={placeholder} style={styles.featuredImage} />
        <Image source={placeholder} style={styles.featuredImage} />
      </View>

      {/* Menu Items Section */}
      <Text style={styles.sectionTitle}>MENU ITEMS</Text>
      <View style={styles.mapContainer}>
        <Image source={map} style={styles.map} />
      </View>

      {/* Reserve Button */}
      <TouchableOpacity style={styles.reserveButton}>
        <Text style={styles.reserveButtonText}>RESERVE</Text>
      </TouchableOpacity>

      {/* Bottom Icons */}
      <View style={styles.bottomIcons}>
        <TouchableOpacity>
          <Image source={placeholder} style={styles.bottomIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={placeholder} style={styles.bottomIcon} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
  backButton: {
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  backButtonText: {
    color: "#6200ea",
    fontSize: 18,
    fontWeight: "bold",
  },
  mainImage: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  titleSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  restaurantTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#d5a6e6",
    marginBottom: 10,
  },
  restaurantDescription: {
    fontSize: 14,
    textAlign: "center",
    color: "#444",
    marginBottom: 20,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginBottom: 20,
  },
  icon: {
    width: 40,
    height: 40,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#d5a6e6",
    marginBottom: 10,
  },
  featuredRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  featuredImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  mapContainer: {
    marginBottom: 20,
  },
  map: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  reserveButton: {
    backgroundColor: "#6200ea",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 20,
  },
  reserveButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  bottomIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
  bottomIcon: {
    width: 50,
    height: 50,
  },
});

export default RestaurantScreen;
