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
import API from "../api";


const LoginScreen = ({ navigation }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Error", "Please fill in both fields.");
    } else {
      try {
        const response = await API.post("/user/login", {username, password});
        const { user, message } = response.data;
        Alert.alert("Success", message);
        navigation.navigate("MainTabs", {user});
      } catch (err) {
        const errorMessage = err.response?.data?.error || "Something went wrong.";
        Alert.alert("Error", errorMessage);
      }
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
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
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

