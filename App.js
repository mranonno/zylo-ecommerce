// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./Redux/store";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/navigation/Routes";
import MyProvider from "./src/Context/MainContex";
// import { setTest } from './Redux/userReducer/userReducer';

export default function App() {
  // const dispatch=useDispatch()
  // const {test}=useSelector(state=>state.user)
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MyProvider>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </MyProvider>
      </PersistGate>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
