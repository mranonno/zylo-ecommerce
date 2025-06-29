import { Provider } from "react-redux";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import store from "./Redux/store";
import MyProvider from "./src/Context/MainContext";
import Routes from "./src/navigation/Routes";

import { createStackNavigator } from "@react-navigation/stack";
import ProductDetailsScreen from "./src/screens/ProductDetailsScreen";

const RootStack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <MyProvider>
        <NavigationContainer>
          <StatusBar
            translucent={true}
            backgroundColor={"white"}
            barStyle={"dark-content"}
          />

          <RootStack.Navigator>
            <RootStack.Screen
              name="Main"
              component={Routes}
              options={{ headerShown: false }}
            />
            <RootStack.Screen
              name="ProductDetails"
              component={ProductDetailsScreen}
              options={{ headerShown: true, title: "Product Details" }}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </MyProvider>
    </Provider>
  );
}
