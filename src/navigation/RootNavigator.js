import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import Routes from "./Routes"; // Main tab navigator

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Auth Screens */}
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />

      {/* Main Tab Navigation */}
      <Stack.Screen name="Main" component={Routes} />

      {/* Global Modal Screen Example */}
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{ headerShown: true, title: "Product Details" }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
