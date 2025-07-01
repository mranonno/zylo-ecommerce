import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const CategoriesViewsScreen = ({ route }) => {
  const navigation = useNavigation();
  const { products } = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const category = route.params;

  useEffect(() => {
    navigation.setOptions({ headerTitle: category });
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((item) => item.category === category);
      setFilteredProducts(filtered);
    }
  }, [navigation, category, products]);

  const renderItem = ({ item }) => <ProductCard product={item} />;

  return (
    <FlatList
      data={filteredProducts}
      renderItem={renderItem}
      keyExtractor={(item, index) => item._id?.toString() || index.toString()}
      numColumns={2}
      contentContainerStyle={styles.productContainer}
      columnWrapperStyle={styles.rowWrapper}
      ListEmptyComponent={
        <View style={{ alignItems: "center", marginTop: 40 }}>
          <Text>No products found in this category.</Text>
        </View>
      }
    />
  );
};

export default CategoriesViewsScreen;

const styles = StyleSheet.create({
  productContainer: {
    padding: 12,
  },
  rowWrapper: {
    justifyContent: "space-between",
    marginBottom: 12,
  },
});
