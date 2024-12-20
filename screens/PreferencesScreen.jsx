import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
  TouchableOpacity,
} from "react-native";
import Slider from "@react-native-community/slider";

const PreferencesScreen = ({ navigation }) => {
  const [priceRange, setPriceRange] = useState(50);
  const [ratingEnabled, setRatingEnabled] = useState(true);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()} // Go back to the previous screen
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>&lt; Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>PREFERENCES</Text>
      </View>

      {/* Price Range */}
      <Text style={styles.sectionTitle}>PRICE RANGE</Text>
      <View style={styles.priceRangeContainer}>
        <Text style={styles.priceRangeText}>${priceRange}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          step={1}
          value={priceRange}
          onValueChange={(value) => setPriceRange(value)}
          minimumTrackTintColor="#C6FF00"
          maximumTrackTintColor="#444"
          thumbTintColor="#C6FF00"
        />
      </View>

      {/* Rating */}
      <View style={styles.ratingContainer}>
        <View style={styles.ratingHeader}>
          <Switch
            value={ratingEnabled}
            onValueChange={(value) => setRatingEnabled(value)}
          />
          <Text style={styles.sectionTitle}>RATING</Text>
        </View>
        <Text style={styles.ratingDescription}>
          Ratings calculated by verified customers only
        </Text>
        <Text style={styles.ratingStars}>⭐ ⭐ ⭐ ⭐ ⭐</Text>
        <Text style={styles.superstar}>Superstar</Text>
      </View>

      {/* Location */}
      <Text style={styles.sectionTitle}>LOCATION</Text>
      <View style={styles.tagRow}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>Restaurants</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>Cafe</Text>
        </View>
      </View>
      <View style={styles.tagRow}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>Vancouver</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>Toronto</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>Tokyo</Text>
        </View>
      </View>

      {/* Cuisine */}
      <Text style={styles.sectionTitle}>CUISINE</Text>
      <View style={styles.tagRow}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>Peanut Free</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>Vegan</Text>
        </View>
      </View>

      {/* Additional Details */}
      <Text style={styles.sectionTitle}>ADDITIONAL DETAILS</Text>
      <View style={styles.checklist}>
        {[
          "WiFi",
          "Dog Friendly",
          "Cat Friendly",
          "Outdoor Dining",
          "Accommodation",
          "Accepts Crypto",
          "Touch-less Payment",
          "Private Dining Room",
          "No Background Music",
          "Electric Car Charging",
        ].map((item, index) => (
          <View key={index} style={styles.checklistItem}>
            <Text style={styles.checklistText}>✔ {item}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 30,
    backgroundColor: "#000",
  },
  header: {
    marginBottom: 20,
  },
  backButton: {
    marginBottom: 5,
  },
  backButtonText: {
    fontSize: 18,
    color: "#C6FF00",
    fontWeight: "bold",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#C6FF00",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#C6FF00",
    marginTop: 20,
    marginBottom: 10,
  },
  priceRangeContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  priceRangeText: {
    color: "#C6FF00",
    fontSize: 16,
    marginBottom: 10,
  },
  slider: {
    width: "100%",
    marginTop: 10,
  },
  ratingContainer: {
    marginBottom: 20,
  },
  ratingHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingDescription: {
    color: "#aaa",
    fontSize: 14,
    marginVertical: 10,
  },
  ratingStars: {
    fontSize: 24,
    color: "#C6FF00",
  },
  superstar: {
    fontSize: 16,
    color: "#C6FF00",
    marginTop: 10,
  },
  tagRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  tag: {
    backgroundColor: "#333",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginRight: 10,
    marginBottom: 10,
  },
  tagText: {
    color: "#C6FF00",
    fontSize: 14,
  },
  checklist: {
    marginBottom: 20,
  },
  checklistItem: {
    marginBottom: 5,
  },
  checklistText: {
    fontSize: 14,
    color: "#C6FF00",
  },
});

export default PreferencesScreen;
