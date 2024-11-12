import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/navigation/Routes";
import MyProvider from "./src/Context/MainContext";
import store from "./Redux/store";
import { StatusBar } from "react-native";

export default function App() {
  // const dispatch=useDispatch()
  // const {test}=useSelector(state=>state.user)
  return (
    <Provider store={store}>
      <MyProvider>
        <NavigationContainer>
          <StatusBar
            translucent={true}
            backgroundColor={"white"}
            barStyle={"dark-content"}
          />

          <Routes />
        </NavigationContainer>
      </MyProvider>
    </Provider>
  );
}
