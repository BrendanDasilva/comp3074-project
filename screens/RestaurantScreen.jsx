import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// -- FILTER ICONS -- 
import phone from "../assets/icons/phone.png";
import vegLight from "../assets/icons/vegLight.png";
import visa from "../assets/icons/visa.png";
import cat from "../assets/icons/cat.png";
import milkywayInterior from "../assets/restaurants/milkywayInterior.png";

// -- FEATURE ITEMS --
import featureItem1 from "../assets/restaurants/shake1.png";
import featureItem2 from "../assets/restaurants/featureItem2.png";

// -- NAVIGATION --
import map from "../assets/map.png";

// -- NETWORK ICONS --
import love from "../assets/icons/love.png";
import share from "../assets/icons/share.png";

const RestaurantScreen = ({ navigation }) => {

  return (
    <LinearGradient
    colors={['rgba(246, 108, 230, 0.46)', 'rgba(216, 141, 226, 0.76)',  '#f9f3f9']}
    style={styles.container}
    locations={[0, 0.2, 1]}
    start={{ x: 0.5, y: 0}} // top left
    end={{ x: 0.5, y: 1 }} // horizontal gradient (left to right)
  >
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Text style={styles.backButtonText}>&lt; Back</Text>
      </TouchableOpacity>

      {/* Main Image */}
      <Image source={milkywayInterior} style={styles.mainImage} />

      {/* Title Section */}
      <View style={styles.titleSection}>
        <Text style={styles.restaurantTitle}>MILKY WAY SHAKES</Text>
        <Text style={styles.restaurantDescription}>
          Specializing in Milk Shakes that are out of this world
        </Text>
        <View style={styles.iconRow}>
          <Image source={phone} style={styles.icon} />
          <Image source={vegLight} style={styles.icon} />
          <Image source={cat} style={styles.icon} />
          <Image source={visa} style={styles.icon} />
        </View>
      </View>

      {/* Featured Items Section */}
      <Text style={styles.sectionTitle}>FEATURED</Text>
      <View style={styles.featuredRow}>
        <Image source={featureItem1} style={styles.featuredImage} />
        <Image source={featureItem2} style={styles.featuredImage} />
      </View>

      {/* Menu Items Section */}
      <Text style={styles.sectionTitle}>MENU ITEMS</Text>
      <View style={styles.mapContainer}>
        <Image source={map} style={styles.map} />
      </View>

      {/* Reserve Button */}
      <TouchableOpacity style={[styles.reserveButton, styles.neumorphic]}>
        <Text style={styles.reserveButtonText}>RESERVE</Text>
      </TouchableOpacity>

      {/* Bottom Icons */}
      <View style={styles.bottomIcons}>
        <TouchableOpacity>
          <Image source={love} style={styles.bottomIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={share} style={styles.bottomIcon} />
        </TouchableOpacity>
      </View>
    </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 50,
    borderRadius: 15,
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
    borderWidth: 3,
    elevation: 40,
    borderWidth: 2,
    borderColor: 'rgba(54, 4, 50, 0.72)',
    shadowRadius: 10,
    shadowColor: 'rgba(241, 246, 245, 0.85)',
    shadowOffset: { width: -10, height: -10}, // Light Shadow
    borderRadius: 15,
    marginTop: 15,
    marginBottom: 30,
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
    borderWidth: 3,
    elevation: 40,
    borderWidth: 2,
    borderColor: 'rgba(54, 4, 50, 0.72)',
    shadowRadius: 10,
    shadowColor: 'rgba(241, 246, 245, 0.85)',
    shadowOffset: { width: -10, height: -10}, // Light Shadow
    borderRadius: 15,
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
    backgroundColor: "#ea00bf",
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

  neumorphic: {
    elevation: 8,
    borderWidth: 3,
    borderColor: 'rgba(180, 113, 163, 0.44)',
    shadowRadius: 8,
    shadowColor: '#b64ac7',
    shadowOffset: { width: 6, height: 6}, 
    backgroundColor: '#eb90ee',
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
