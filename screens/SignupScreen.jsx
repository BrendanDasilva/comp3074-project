import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  // StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

import styles from "../assets/styles/SignupScreenStyles/SignupScreenStyles.js";
import API from "../api"

const SignupScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
      if (!firstName || !lastName || !email || !password || !confirmPassword || !username) {
          Alert.alert("Error", "All fields are required.");
      } else if (password !== confirmPassword) {
          Alert.alert("Error", "Passwords do not match.");
      } else {
          try {
              const response = await API.post("/user/signup", {
                  firstName,
                  lastName,
                  username,
                  email,
                  password,
              });

              Alert.alert("Success", response.data.message);
              navigation.navigate("Login");
          } catch (err) {
              const errorMessage = err.response?.data?.error || "Something went wrong.";
              Alert.alert("Error", errorMessage);
          }
      }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>W4D</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        placeholderTextColor="#aaa"
        value={firstName}
        onChangeText={setFirstName}
      />

      <TextInput
        style={styles.input}
        placeholder="Last Name"
        placeholderTextColor="#aaa"
        value={lastName}
        onChangeText={setLastName}
      />

      <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#aaa"
          value={username}
          onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};


export default SignupScreen;
