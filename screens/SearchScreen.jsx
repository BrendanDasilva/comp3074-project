import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import placeholder from "../assets/placeholder.png";
import styles from "../styles/SearchScreenStyles";

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
        <Image source={placeholder} style={styles.restaurantImage} />
        <Image source={placeholder} style={styles.restaurantImage} />
        <Image source={placeholder} style={styles.restaurantImage} />
        <Image source={placeholder} style={styles.restaurantImage} />
        <Image source={placeholder} style={styles.restaurantImage} />
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
