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

// -- NAVIGATION --
import { useNavigation } from "@react-navigation/native";


// -- RESTAURANT IMAGES -- 
import milkywayshakes from "../assets/restaurants/milkywayShakes.png";
import cafe from "../assets/restaurants/cafe.png";

// -- IN YOUR AREA --
import koreanbbq from "../assets/restaurants/koreanbbq.png";
import italian from "../assets/restaurants/italian.png";


// -- NIGHT OUT --
import nightout2 from "../assets/restaurants/nightout2.png";

// -- ICON MENU -- 
import donut from '../assets/icons/donut.png'
import coffeeIcon from "../assets/icons/coffeeIcon.png";
import ramen from "../assets/icons/ramen.png"
import veg from "../assets/icons/veg.png";


const HomeScreen = () => {
  const navigation = useNavigation();

  return (

    
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

      <Text style={styles.logo}>W4D</Text>


        {/* -- LOGIN/SIGNUP -- */}
      <View style={styles.authButtonsContainer}>
        <TouchableOpacity style={styles.authButton} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.authButtonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.authButton} onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.authButtonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View> 

        {/* -- MENU ICONS -- */}
      <View style={styles.iconRow}>
        <Image source={coffeeIcon} style={styles.icon} />
        <TouchableOpacity onPress={() => navigation.navigate("Restaurant")}>
        <Image source={donut} style={styles.icon} />
        </TouchableOpacity>
        <Image source={ramen} style={styles.icon} />
        <Image source={veg} style={styles.icon} />
      </View>

        {/* -- ON THE GO -- */}
      <Text style={styles.sectionTitle}>ON THE GO?</Text>
      <View style={styles.imageRow}>
        <TouchableOpacity onPress={() => navigation.navigate("Restaurant")}>
        <Image source={milkywayshakes} style={styles.image} />
        </TouchableOpacity>
        <Image source={cafe} style={styles.image} />
      </View>

        {/* -- IN YOUR AREA -- */}
      <Text style={styles.sectionTitle}>IN YOUR AREA</Text>
      <View style={styles.imageRow}>
        <Image source={koreanbbq} style={styles.image} />
        <Image source={italian} style={styles.image} />
      </View>

        {/* -- GOING OUT -- */}
      <Text style={styles.sectionTitle}>GOING OUT?</Text>
      <View style={styles.imageRow}>
        <Image source={nightout2} style={styles.largeImage} />
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


  scrollContainer: {
    alignItems: "center", 
    paddingBottom: 80, 
    backgroundColor: "#000", 
    flexGrow: 1, 

  },

  logo: {
    fontSize: 50,
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
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },

  icon: {
    width: 44,
    height: 44,
  },

  sectionTitle: {
    fontSize: 24,
    fontFamily: 'monospace',
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
    width: 180,
    height: 220,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#12F1FC",
  },

  largeImage: {
    width:  300,
    height: 200,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#C6FF00",
    marginBottom: 20,
  },

});

export default HomeScreen;
