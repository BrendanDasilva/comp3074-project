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
import styles from "../assets/styles/RestaurantStyles/RestaurantStyles.js";

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


export default RestaurantScreen;
