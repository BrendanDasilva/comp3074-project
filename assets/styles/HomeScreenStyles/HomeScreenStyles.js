import { StyleSheet } from "react-native";

const homeStyles = StyleSheet.create({

    safeArea: {
      flex: 1,
      backgroundColor: "#000",
      paddingTop: 50,
    },
    container: {
      alignItems: "center",
      padding: 10,
      backgroundColor: "#000",
      flexGrow: 1,
    },
    logo: {
      fontSize: 36,
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
      justifyContent: "space-evenly",
      width: "100%",
      marginBottom: 20,
    },
    icon: {
      width: 50,
      height: 50,
    },
    sectionTitle: {
      fontSize: 24,
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
      width: 200,
      height: 200,
      borderRadius: 15,
      borderWidth: 2,
      borderColor: "#C6FF00",
    },
    largeImage: {
      width: "90%",
      height: 200,
      borderRadius: 15,
      borderWidth: 2,
      borderColor: "#C6FF00",
      marginBottom: 20,
    },

});

export default homeStyles;