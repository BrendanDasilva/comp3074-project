import { StyleSheet } from "react-native";


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
export default styles;
