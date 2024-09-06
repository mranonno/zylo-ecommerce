import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import FavoritesScreen from "../screens/FavoritesScreen";
import { createStackNavigator } from "@react-navigation/stack";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import BrowseScreen from "../screens/BrowseScreen";

const HomeStack = createStackNavigator();
// const BrowseStack = createStackNavigator();
// const FavoritesStack = createStackNavigator();
// const CartStack = createStackNavigator();
// const ProfileStack = createStackNavigator();

function HomeStackScreen({ navigation, route }) {
  const routeName = getFocusedRouteNameFromRoute(route);
  useLayoutEffect(() => {
    if (routeName === "ProductDetails") {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
  }, [navigation, routeName]);
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{ headerShown: true }}
      />
    </HomeStack.Navigator>
  );
}

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
        component={HomeStackScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Browse"
        component={BrowseScreen}
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
