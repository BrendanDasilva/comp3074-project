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
import styles from "../styles/RestaurantScreenStyles";

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

export default RestaurantScreen;
