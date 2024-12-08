import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  // StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

import styles from '../assets/styles/LoginScreenStyles/LoginScreenStyles';
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
      style={styles.container}
      locations={[0, 0.2, 1]}
      start={{ x: 0.5, y: 0}} // top left
      end={{ x: 0.5, y: 1 }} // horizontal gradient (left to right)
    >
      
      {/* LOGO **/}
      <Text style={styles.logo}>W4D</Text>
      

      {/* USERNAME INPUT */}
      <TextInput
        style={[styles.input, styles.neumorphic]}
        placeholder='username'
        placeholderTextColor="#888"
        value={username}
        onChangeText={setUsername}
      />

      {/* PASSWORD INPUT */}
      <TextInput
        style={[styles.input, styles.neumorphic]}
        placeholder="password"
        placeholderTextColor='#888'
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      
      {/* LOGIN BUTTON */}
      <TouchableOpacity 
        style={[styles.loginButton, styles.neumorphic]} 
        onPress={handleLogin}
        activeOpacity = {0.8}>

      <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* MENU CONTAINER */}
      <View style={styles.footer}>
      <TouchableOpacity onPress={() => Alert.alert("Sign Up")}>
          <Text style={styles.footerText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert("Forget your password?")}>
          <Text style={styles.footerText}>Forgot Your Password?</Text>
        </TouchableOpacity>
        </View>
      </LinearGradient>

  );
};

export default LoginScreen;

