import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "../assets/styles/AccountScreenStyles/AccountScreenStyles.js";
// import placeholder from "../assets/placeholder.png";
import nightout from "../assets/nightout.png";
import girlsnight from "../assets/girlsnight.png";
import fancyplace from "../assets/fancyplace.jpg";
import pub from "../assets/pub.jpg";
import pizza from "../assets/pizza.jpg";
import seafood from "../assets/seafood.jpg";
import sandwhich from "../assets/sandwhich.jpg";

const AccountScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <View style={styles.profilePic} />
        <Text style={styles.profileName}>DAISY</Text>
        <Text style={styles.profileUsername}>@_dazed</Text>
      </View>

      {/* About Me */}
      <View style={styles.infoBox}>
        <Text style={styles.infoBoxTitle}>ABOUT ME</Text>
        <Text style={styles.infoBoxText}>
          I just really like food...and being able to find it quickly, but I
          have some preferences...like no Dairy...no peanuts...and I am also a
          vegetarian.
        </Text>
      </View>

      {/* Account Details */}
      <View style={styles.infoBox}>
        <Text style={styles.infoBoxTitle}>ACCOUNT DETAILS</Text>
      </View>

      {/* Filter Preferences */}
      <View style={styles.infoBox}>
        <TouchableOpacity onPress={() => navigation.navigate("Preferences")}>
          <Text style={styles.infoBoxTitle}>FILTER PREFERENCES</Text>
        </TouchableOpacity>
      </View>

      {/* Pods Section */}
      <Text style={styles.podsTitle}>PODS</Text>

      {/* Night Out */}
      <View style={styles.podContainer}>
        <Text style={styles.podLabel}>Night Out</Text>
        <View style={styles.imageRow}>
          <TouchableOpacity onPress={() => navigation.navigate("Pod")}>
            <Image source={nightout} style={styles.podImage} />
          </TouchableOpacity>
          <Image source={girlsnight} style={styles.podImage} />
        </View>
      </View>

      {/* Restaurants in the City */}
      <View style={styles.podContainer}>
        <Text style={styles.podLabel}>Restaurants in the City</Text>
        <View style={styles.imageRow}>
          <Image source={fancyplace} style={styles.podImage} />
          <Image source={pub} style={styles.podImage} />
        </View>
      </View>

      {/* Pod with Mom & Dad */}
      <View style={styles.podContainer}>
        <Text style={styles.podLabel}>Pod with Mom & Dad</Text>
        <View style={styles.imageRow}>
          <Image source={pizza} style={styles.podImage} />
          <Image source={seafood} style={styles.podImage} />
        </View>
      </View>

      {/* Work Lunch */}
      <View style={styles.podContainer}>
        <Text style={styles.podLabel}>Work Lunch</Text>
        <View style={styles.imageRow}>
          <Image source={sandwhich} style={styles.podImage} />
          <Image source={pizza} style={styles.podImage} />
        </View>
      </View>
    </ScrollView>
  );
};


export default AccountScreen;
