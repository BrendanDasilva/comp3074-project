import { StyleSheet } from "react-native";

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
  signupButton: {
    backgroundColor: "#C6FF00",
    width: 80,
    height: 80,
    borderRadius: 40,
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

export default styles;
