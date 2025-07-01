import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
const HomeScreenHeader = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
      <Text style={styles.userName}>Hello Michael</Text>
    </TouchableOpacity>
  );
};

export default HomeScreenHeader;

const styles = StyleSheet.create({
  userName: { fontSize: 36, marginTop: 20, marginBottom: 8, fontWeight: "800" },
});
