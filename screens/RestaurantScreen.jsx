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

    width: 300,
    height: 350,
    elevation: 20,

    marginTop: 15,
    marginBottom: 30,

    borderWidth: 3,
    borderRadius: 15,
    borderColor: 'rgba(202, 119, 196, 0.46)',


    shadowRadius: 8,
    shadowColor: 'rgb(106, 3, 113)',
    shadowOffset: { width: 8, height: 8},

  },

  titleSection: {

    alignItems: "center",
    marginBottom: 20,

  },

  restaurantTitle: {

    color: "#d5a6e6",

    fontSize: 30,
    fontWeight: "bold",

    marginBottom: 10,

  },

  restaurantDescription: {

    color: "#444",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,

  },


  iconRow: {

    width: "90%",
    marginBottom: 20,

    flexDirection: "row",
    justifyContent: "space-around",

  },

  icon: {

    width: 40,
    height: 40,

  },

  sectionTitle: {

    color: "#d5a6e6",

    fontSize: 20,
    fontWeight: "bold",

    marginBottom: 10,

  },

  featuredRow: {

    width: "100%",
    marginBottom: 20,

    flexDirection: "row",
    justifyContent: "space-around",


  },

  featuredImage: {

    width: 150,
    height: 150,
    elevation: 40,

    borderWidth: 3,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: 'rgba(54, 4, 50, 0.72)',

    shadowRadius: 10,
    shadowColor: 'rgba(241, 246, 245, 0.85)',
    shadowOffset: { width: -10, height: -10}, // Light Shadow


  },

  mapContainer: {

    elevation: 40,
    marginBottom: 20,

    borderRadius: 10,

    shadowRadius: 10,
    shadowColor: 'rgba(24, 2, 20, 0.85)',
    shadowOffset: { width: 10, height: 10},
  },

  map: {

    width: 300,
    height: 200,
    elevation: 40,

    borderWidth: 2,
    borderColor: 'rgba(228, 178, 224, 0.79)',
    borderRadius: 10,

    shadowColor: 'rgba(244, 183, 233, 0.85)',
    shadowRadius: 10,
    shadowOffset: { width: -10, height: -10}, 

  },

  reserveButton: {

    marginBottom: 20,
    borderRadius: 10,

        
    paddingVertical: 10,
    paddingHorizontal: 40,

    backgroundColor: "#ea00bf",

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
