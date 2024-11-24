import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      padding: 20,
      paddingTop: 50,
      backgroundColor: "#000",
      alignItems: "center",
    },
    backButton: {
      alignSelf: "flex-start",
      marginBottom: 10,
    },
    backButtonText: {
      color: "#6200ea",
      fontSize: 18,
      fontWeight: "bold",
    },
    mainImage: {
      width: "100%",
      height: 250,
      borderRadius: 10,
      marginBottom: 20,
    },
    titleSection: {
      alignItems: "center",
      marginBottom: 20,
    },
    restaurantTitle: {
      fontSize: 30,
      fontWeight: "bold",
      color: "#d5a6e6",
      marginBottom: 10,
    },
    restaurantDescription: {
      fontSize: 14,
      textAlign: "center",
      color: "#444",
      marginBottom: 20,
    },
    iconRow: {
      flexDirection: "row",
      justifyContent: "space-around",
      width: "80%",
      marginBottom: 20,
    },
    icon: {
      width: 40,
      height: 40,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#d5a6e6",
      marginBottom: 10,
    },
    featuredRow: {
      flexDirection: "row",
      justifyContent: "space-around",
      width: "100%",
      marginBottom: 20,
    },
    featuredImage: {
      width: 150,
      height: 150,
      borderRadius: 10,
    },
    mapContainer: {
      marginBottom: 20,
    },
    map: {
      width: 300,
      height: 200,
      borderRadius: 10,
    },
    reserveButton: {
      backgroundColor: "#6200ea",
      paddingVertical: 10,
      paddingHorizontal: 40,
      borderRadius: 10,
      marginBottom: 20,
    },
    reserveButtonText: {
      fontSize: 16,
      color: "#fff",
      fontWeight: "bold",
    },
    bottomIcons: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "50%",
    },
    bottomIcon: {
      width: 50,
      height: 50,
    },
  });
  

export default styles;
