import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const CategorySlider = ({ categories }) => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("Categories", item)}>
      <Text style={styles.categoryButton}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.category}
      />
    </View>
  );
};

export default CategorySlider;

const styles = StyleSheet.create({
  category: {
    alignItems: "center",
    flexDirection: "row",
    gap: 32,
  },
  categoryButton: {
    fontSize: 16,
  },
});
