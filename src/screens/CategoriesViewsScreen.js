import { ScrollView, StyleSheet, Text, View } from "react-native";
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

  console.log("filteredProducts", JSON.stringify(filteredProducts, null, 1));
  return (
    <ScrollView contentContainerStyle={styles.productContainer}>
      {filteredProducts.map((product, index) => (
        <ProductCard key={index} product={product}></ProductCard>
      ))}
    </ScrollView>
  );
};

export default CategoriesViewsScreen;

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    rowGap: 20,
    padding: 20,
  },
});
