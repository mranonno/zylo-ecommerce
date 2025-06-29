import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const CategorySlider = ({ categories }) => {
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.category}
      >
        {categories.map((category, index) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Categories", category)}
            key={index}
          >
            <Text style={styles.categoryButton}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
  categoryButton: { fontSize: 16 },
});
