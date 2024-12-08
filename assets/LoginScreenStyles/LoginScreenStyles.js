import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    text: {
      fontFamily: 'Jersey10-Normal',
    },
  
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#15181D",
    },
  
  
    logo: {
  
      color: '#ebe9e9',
      fontSize: 80,
      fontWeight: "bold",
      fontFamily: 'Jersey10-Normal, system',
      marginBottom: 40,
      textShadowColor: '#f1f5e0',
      textShadowOffset: { width: 1, height: 1},
      textShadowRadius: 20,
    },
  
  
    input: {
      width: 339,
      height: 56,
      textAlign: "center",
      borderRadius: 36,
      marginBottom: 20,
      backgroundColor: "#0e1621",
      color: "white"
    },
  
    neumorphic: {
      elevation: 8,
      borderWidth: 2,
      borderColor: 'rgba(45, 44, 44, 0.44)',
      borderRadius: 36,
      shadowRadius: 2,
      shadowColor: 'rgba(241, 246, 245, 0.85)',
      shadowOffset: { width: -6, height: -6}, // Light Shadow
      backgroundColor: '#161a1e',
    },
  
    loginButton: {
      width: 80,
      height: 80,
      marginTop: 20,
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#282727",
      borderRadius: 40,
      justifyContent: "center",
      backgroundColor: "#0f1215",
    },
  
    buttonText: {
      color: "#FFFFFF",
      fontSize: 14,
    },
  
    footer: {
      position: "absolute",
      bottom: 30,
      alignItems: "center",
    },
  
    footerText: {
      color: '#b1b2af',
      fontSize: 14,
      marginVertical: 5,
    },
});

export default styles;