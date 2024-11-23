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
import placeholder from "../assets/placeholder.png";
import nightout from "../assets/nightout.png";

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
          <Image source={placeholder} style={styles.podImage} />
        </View>
      </View>

      {/* Restaurants in the City */}
      <View style={styles.podContainer}>
        <Text style={styles.podLabel}>Restaurants in the City</Text>
        <View style={styles.imageRow}>
          <Image source={placeholder} style={styles.podImage} />
          <Image source={placeholder} style={styles.podImage} />
        </View>
      </View>

      {/* Pod with Mom & Dad */}
      <View style={styles.podContainer}>
        <Text style={styles.podLabel}>Pod with Mom & Dad</Text>
        <View style={styles.imageRow}>
          <Image source={placeholder} style={styles.podImage} />
          <Image source={placeholder} style={styles.podImage} />
        </View>
      </View>

      {/* Work Lunch */}
      <View style={styles.podContainer}>
        <Text style={styles.podLabel}>Work Lunch</Text>
        <View style={styles.imageRow}>
          <Image source={placeholder} style={styles.podImage} />
          <Image source={placeholder} style={styles.podImage} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 50,
    backgroundColor: "#000",
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#333",
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#C6FF00",
  },
  profileUsername: {
    fontSize: 16,
    color: "#aaa",
  },
  infoBox: {
    width: "100%",
    backgroundColor: "#222",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  infoBoxTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#C6FF00",
  },
  infoBoxText: {
    fontSize: 14,
    color: "#fff",
  },
  podsTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#C6FF00",
    marginTop: 20,
    marginBottom: 10,
  },
  podContainer: {
    marginBottom: 20,
  },
  podLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 10,
  },
  imageRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  podImage: {
    width: 150,
    height: 150,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#C6FF00",
    marginBottom: 10,
  },
});

export default AccountScreen;
