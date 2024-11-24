import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import placeholder from "../assets/placeholder.png";
import milkywayshakes from "../assets/milkywayshakes.png";
import styles from "../styles/HomeScreenStyles";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.logo}>W4D</Text>

        {/* Login and Sign Up Buttons */}
        <View style={styles.authButtonsContainer}>
          <TouchableOpacity
            style={styles.authButton}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.authButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.authButton}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={styles.authButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.iconRow}>
          <Image source={placeholder} style={styles.icon} />
          <Image source={placeholder} style={styles.icon} />
          <Image source={placeholder} style={styles.icon} />
          <Image source={placeholder} style={styles.icon} />
        </View>

        <Text style={styles.sectionTitle}>ON THE GO?</Text>
        <View style={styles.imageRow}>
          <TouchableOpacity onPress={() => navigation.navigate("Restaurant")}>
            <Image source={milkywayshakes} style={styles.image} />
          </TouchableOpacity>
          <Image source={placeholder} style={styles.image} />
        </View>

        <Text style={styles.sectionTitle}>IN YOUR AREA</Text>
        <View style={styles.imageRow}>
          <Image source={placeholder} style={styles.image} />
          <Image source={placeholder} style={styles.image} />
        </View>

        <Text style={styles.sectionTitle}>GOING OUT?</Text>
        <View style={styles.imageRow}>
          <Image source={placeholder} style={styles.largeImage} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};



export default HomeScreen;
