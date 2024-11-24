import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 10,
    paddingTop: 50,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222",
    borderRadius: 25,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#fff",
    paddingVertical: 8,
  },
  searchButton: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#444",
    marginLeft: 8,
  },
  searchIcon: {
    fontSize: 18,
    color: "#fff",
  },
  listContainer: {
    alignItems: "center",
    paddingBottom: 20,
  },
  restaurantImage: {
    width: "100%",
    height: 180,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#C6FF00",
    marginBottom: 20,
  },
});

export default styles;
