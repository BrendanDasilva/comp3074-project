import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert("Error", "Please fill in both fields.");
    } else {
      // Handle login logic here
      Alert.alert("Success", `Welcome back, ${username}!`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>W4D</Text>

      <TextInput
        style={styles.input}
        placeholder="username"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  logo: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#C6FF00",
    marginBottom: 40,
  },
  input: {
    backgroundColor: "#222",
    borderRadius: 20,
    padding: 15,
    width: "80%",
    marginBottom: 20,
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    shadowColor: "#C6FF00",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  loginButton: {
    backgroundColor: "#C6FF00",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#C6FF00",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default LoginScreen;
