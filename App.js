import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

import store from "./Redux/store";
import MyProvider from "./src/Context/MainContext";
import RootNavigator from "./src/navigation/RootNavigator";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <MyProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <NavigationContainer>
              <StatusBar
                translucent
                backgroundColor="white"
                barStyle="dark-content"
              />
              <RootNavigator />
            </NavigationContainer>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </MyProvider>
    </Provider>
  );
}
