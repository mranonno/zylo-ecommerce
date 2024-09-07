import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/navigation/Routes";
import MyProvider from "./src/Context/MainContext";
import store from "./Redux/store";

export default function App() {
  // const dispatch=useDispatch()
  // const {test}=useSelector(state=>state.user)
  return (
    <Provider store={store}>
      <MyProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </MyProvider>
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
