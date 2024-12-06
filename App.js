import React from "react";

// -- NAVIGATION --
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// -- MENU ICON VECTOR --
import Icon from "react-native-vector-icons/Ionicons";

// -- SCREENS --
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import AccountScreen from "./screens/AccountScreen";
import PreferencesScreen from "./screens/PreferencesScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import PodScreen from "./screens/PodScreen";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


// -- HOME STACK --
function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}

// -- ACCOUNT STACK --
function AccountStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Preferences" component={PreferencesScreen} />
      <Stack.Screen name="Pod" component={PodScreen} />
    </Stack.Navigator>
  );
}

// -- ROOT NAV WITH MODIFACTION (LOGIN ISOLATED) --
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown : false }}>

        {/* -- LOGIN SCREEN -- */}
        <Stack.Screen name="Login" component={LoginScreen} />

        {/* -- MAIN APP WITH BOTTOM NAV -- */}
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// -- MAIN TABS ( ROOT  NAV ) --
function MainTabs() {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        
        headerShown: false,
        tabBarStyle: { backgroundColor: "#070707" },
        tabBarActiveTintColor: "#00ffe1",
        tabBarInactiveTintColor: "#FFF",

        tabBarIcon: ({ focused, color, size }) => {

          let iconName;

          if (route.name === "HomeStack") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "AccountStack") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Icon name={iconName} size={size} color={color} />
        },
      })}
      >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{ title: "Home" }}
      />
      <Tab.Screen 
        name="Search" 
        component={SearchScreen} 
      />
      <Tab.Screen 
        name="AccountStack" 
        component={AccountScreen} 
        options={{ title : "Account"}} 
      />
      </Tab.Navigator>
  );
}



