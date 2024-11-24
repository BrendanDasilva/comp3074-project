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
import styles from "../styles/PodScreenStyles";

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


export default PodScreen;
