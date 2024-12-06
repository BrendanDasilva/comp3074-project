import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import placeholder from "../assets/placeholder.png";

const PodScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button and Pod Title */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>&lt; Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Night Out</Text>
      </View>

      {/* Pod Members */}
      <View style={styles.membersContainer}>
        <Image source={placeholder} style={styles.memberAvatar} />
        <Image source={placeholder} style={styles.memberAvatar} />
        <Image source={placeholder} style={styles.memberAvatar} />
        <View style={styles.memberCount}>
          <Text style={styles.memberCountText}>+1</Text>
        </View>
      </View>

      {/* Messages and Images */}
      <View style={styles.chatBubble}>
        <Text style={styles.chatBubbleText}>Location?</Text>
      </View>
      <View style={styles.imagesContainer}>
        <Image source={placeholder} style={styles.largeImage} />
        <Image source={placeholder} style={styles.largeImage} />
      </View>

      {/* Other Sections */}
      <View style={styles.imagesContainer}>
        <Image source={placeholder} style={styles.mediumImage} />
        <Image source={placeholder} style={styles.mediumImage} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 10,
    paddingTop: 50,
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
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#C6FF00",
    textAlign: "center",
    marginBottom: 20,
  },
  membersContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  memberAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 5,
  },
  memberCount: {
    backgroundColor: "#333",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  memberCountText: {
    color: "#C6FF00",
    fontSize: 16,
    fontWeight: "bold",
  },
  chatBubble: {
    backgroundColor: "#3CFF00",
    alignSelf: "flex-start",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  chatBubbleText: {
    color: "#000",
    fontSize: 16,
  },
  imagesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  largeImage: {
    width: "48%",
    height: 150,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#C6FF00",
  },
  mediumImage: {
    width: "30%",
    height: 100,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#C6FF00",
  },
});

export default PodScreen;
