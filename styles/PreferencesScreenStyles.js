import { StyleSheet } from "react-native";


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
  
export default styles;
