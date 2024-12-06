import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  // StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import LoginScreenStyles from '../assets/LoginScreenStyles/LoginScreenStyles';
import { LinearGradient } from "expo-linear-gradient";


const LoginScreen = ({ navigation }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert("Error", "Please fill in both fields.");
    } else {
      // Handle login logic here
      // Alert.alert("Success", `Welcome back, ${username}!`);
      navigation.navigate("MainTabs")
    }
  };

  return (

    <LinearGradient
      colors={['rgba(206, 230, 101, 0.4)', 'rgba(21, 24, 29, 0.76)',  '#000000']}
      style={LoginScreenStyles.container}
      locations={[0, 0.2, 1]}
      start={{ x: 0.5, y: 0}} // top left
      end={{ x: 0.5, y: 1 }} // horizontal gradient (left to right)
    >
      
      {/* LOGO **/}
      <Text style={LoginScreenStyles.logo}>W4D</Text>
      

      {/* USERNAME INPUT */}
      <TextInput
        style={[LoginScreenStyles.input, LoginScreenStyles.neumorphic]}
        placeholder='username'
        placeholderTextColor="#888"
        value={username}
        onChangeText={setUsername}
      />

      {/* PASSWORD INPUT */}
      <TextInput
        style={[LoginScreenStyles.input, LoginScreenStyles.neumorphic]}
        placeholder="password"
        placeholderTextColor='#888'
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      
      {/* LOGIN BUTTON */}
      <TouchableOpacity 
        style={[LoginScreenStyles.loginButton, LoginScreenStyles.neumorphic]} 
        onPress={handleLogin}
        activeOpacity = {0.8}>

      <Text style={LoginScreenStyles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* MENU CONTAINER */}
      <View style={LoginScreenStyles.footer}>
      <TouchableOpacity onPress={() => Alert.alert("Sign Up")}>
          <Text style={LoginScreenStyles.footerText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert("Forget your password?")}>
          <Text style={LoginScreenStyles.footerText}>Forgot Your Password?</Text>
        </TouchableOpacity>
        </View>
      </LinearGradient>

  );
};

// const styles = StyleSheet.create({

//   text: {
//     fontFamily: 'Roboto',
//   },

//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#15181D",
//   },


//   logo: {

//     color: '#ebe9e9',
//     fontSize: 80,
//     fontWeight: "bold",
//     marginBottom: 40,
//     textShadowColor: '#f1f5e0',
//     textShadowOffset: { width: 1, height: 1},
//     textShadowRadius: 20,
//   },


//   input: {
//     width: 339,
//     height: 56,
//     textAlign: "center",
//     borderRadius: 36,
//     marginBottom: 20,
//     backgroundColor: "#0e1621",
//   },

//   neumorphic: {
//     elevation: 8,
//     borderWidth: 2,
//     borderColor: 'rgba(45, 44, 44, 0.44)',
//     borderRadius: 36,
//     shadowRadius: 2,
//     shadowColor: 'rgba(241, 246, 245, 0.85)',
//     shadowOffset: { width: -6, height: -6}, // Light Shadow
//     backgroundColor: '#161a1e',
//   },

//   loginButton: {
//     width: 80,
//     height: 80,
//     marginTop: 20,
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#282727",
//     borderRadius: 40,
//     justifyContent: "center",
//     backgroundColor: "#0f1215",
//   },

//   buttonText: {
//     color: "#FFFFFF",
//     fontSize: 14,
//   },

//   footer: {
//     position: "absolute",
//     bottom: 30,
//     alignItems: "center",
//   },

//   footerText: {
//     color: '#b1b2af',
//     fontSize: 14,
//     marginVertical: 5,
//   },

// });

export default LoginScreen;

