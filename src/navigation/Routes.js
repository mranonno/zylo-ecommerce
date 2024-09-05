import React from "react";
import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import FavoritesScreen from "../screens/FavoritesScreen";

const Tab = createBottomTabNavigator();
const Routes = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Cart") {
            iconName = focused ? "opencart" : "opencart";
          } else if (route.name === "Profile") {
            iconName = focused ? "user" : "user";
          } else if (route.name === "Browse") {
            iconName = focused ? "search" : "search";
          } else if (route.name === "Favorites") {
            iconName = focused ? "heart" : "heart";
          }
          return <FontAwesome5 name={iconName} size={22} color={color} />;
        },
        tabBarLabelStyle: { fontSize: 14 },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: 50,
        },
      })}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Browse"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Favorites"
        component={FavoritesScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Cart"
        component={CartScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default Routes;
