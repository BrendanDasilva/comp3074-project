import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import burger from "../assets/restaurants/Burger.png";
import italian from "../assets/restaurants/Pasta.png";
import breakfast from "../assets/restaurants/Breakfast.png";
import mexican from "../assets/restaurants/mexican.png";
import chickentenders from "../assets/restaurants/chickentenders.png";

const restaurantImages = [chickentenders, italian, burger, mexican, breakfast];


const SearchScreen = () => {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity style={styles.searchButton}>
          <TextInput style={styles.searchIcon}>🔍</TextInput>
        </TouchableOpacity>
      </View>

      {/* Restaurant List */}
      <ScrollView contentContainerStyle={styles.listContainer}>
        <Image source={mexican} style={styles.restaurantImage} />
        <Image source={burger} style={styles.restaurantImage} />
        <Image source={breakfast} style={styles.restaurantImage} />
        <Image source={italian} style={styles.restaurantImage} />
        <Image source={chickentenders} style={styles.restaurantImage} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 10,
    paddingTop: 50,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222",
    borderRadius: 25,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#fff",
    paddingVertical: 8,
  },
  searchButton: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#444",
    marginLeft: 8,
  },
  searchIcon: {
    fontSize: 18,
    color: "#fff",
  },
  listContainer: {
    alignItems: "center",
    paddingBottom: 20,
  },
  restaurantImage: {
    width: "100%",
    height: 180,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#C6FF00",
    marginBottom: 20,
  },
});

export default SearchScreen;
