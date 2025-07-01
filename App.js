import { Provider } from "react-redux";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import store from "./Redux/store";
import MyProvider from "./src/Context/MainContext";
import RootNavigator from "./src/navigation/RootNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <MyProvider>
        <NavigationContainer>
          <StatusBar
            translucent={true}
            backgroundColor="white"
            barStyle="dark-content"
          />
          <RootNavigator />
        </NavigationContainer>
      </MyProvider>
    </Provider>
  );
}
