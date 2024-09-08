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
import ComingSoonScreen from "../components/ComingSoonScreen";
import CategoriesViewsScreen from "../screens/CategoriesViewsScreen";

const HomeStack = createStackNavigator();
const BrowseStack = createStackNavigator();
// const FavoritesStack = createStackNavigator();
// const CartStack = createStackNavigator();
const ProfileStack = createStackNavigator();

function BrowseStackScreen() {
  return (
    <BrowseStack.Navigator>
      <BrowseStack.Screen
        name="BrowseMain"
        component={BrowseScreen}
        options={{ headerShown: false }}
      />
      <BrowseStack.Screen
        name="Categories"
        component={CategoriesViewsScreen}
        options={{ headerShown: true, headerTitle: "Product Details" }}
      />
    </BrowseStack.Navigator>
  );
}
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
        options={{ headerShown: true, headerTitle: "Product Details" }}
      />
      <HomeStack.Screen
        name="Categories"
        component={CategoriesViewsScreen}
        options={{ headerShown: true, headerTitle: "Product Details" }}
      />
    </HomeStack.Navigator>
  );
}
function ProfileStackScreen({ navigation, route }) {
  const routeName = getFocusedRouteNameFromRoute(route);
  useLayoutEffect(() => {
    if (routeName === "Orders") {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
  }, [navigation, routeName]);
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileMain"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name="Orders"
        component={ComingSoonScreen}
        options={{ headerShown: true }}
      />
      <ProfileStack.Screen
        name="EditProfiles"
        component={ComingSoonScreen}
        options={{ headerShown: true, headerTitle: "Edit Profile" }}
      />
      <ProfileStack.Screen
        name="Support"
        component={ComingSoonScreen}
        options={{ headerShown: true }}
      />
      <ProfileStack.Screen
        name="DeliveryAndReturn"
        component={ComingSoonScreen}
        options={{ headerShown: true, headerTitle: "Delivery & Return" }}
      />
      <ProfileStack.Screen
        name="TermsAndCondition"
        component={ComingSoonScreen}
        options={{ headerShown: true, headerTitle: "Terms & Condition" }}
      />
      <ProfileStack.Screen
        name="PrivacyPolicy"
        component={ComingSoonScreen}
        options={{ headerShown: true, headerTitle: "Privacy Policy" }}
      />
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const Routes = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Cart") {
            iconName = "opencart";
          } else if (route.name === "Profile") {
            iconName = "user";
          } else if (route.name === "Browse") {
            iconName = "search";
          } else if (route.name === "Favorites") {
            iconName = "heart";
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
        component={BrowseStackScreen}
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
        options={{
          headerShown: false,
        }}
        name="Profile"
        component={ProfileStackScreen}
      />
    </Tab.Navigator>
  );
};

export default Routes;
