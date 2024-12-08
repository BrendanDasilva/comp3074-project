import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";


import styles from "../assets/styles/SearchScreenStyles/SearchStyles.js";

// -- IMAGE IMPORTS --
import burger from "../assets/restaurants/Burger.png";
import italian from "../assets/restaurants/Pasta.png";
import breakfast from "../assets/restaurants/Breakfast.png";
import mexican from "../assets/restaurants/mexican.png";
import chickentenders from "../assets/restaurants/chickentenders.png";


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


export default SearchScreen;
