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

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 50,
  },
  container: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#000",
    flexGrow: 1,
  },
  logo: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#C6FF00",
    marginBottom: 20,
  },
  authButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  authButton: {
    backgroundColor: "#C6FF00",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  authButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginBottom: 20,
  },
  icon: {
    width: 50,
    height: 50,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#C6FF00",
    marginTop: 20,
    marginBottom: 10,
  },
  imageRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#C6FF00",
  },
  largeImage: {
    width: "90%",
    height: 200,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#C6FF00",
    marginBottom: 20,
  },
});

export default HomeScreen;
