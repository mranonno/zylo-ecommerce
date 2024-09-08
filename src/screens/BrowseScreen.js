import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";

const BrowseScreen = () => {
  const navigation = useNavigation();
  const { products } = useSelector((state) => state.products);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [contentScreen, setContentScreen] = useState(true);
  const handleSearch = () => {
    if (searchQuery == "") {
      setContentScreen(true);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
      setContentScreen(false);
    }
  };
  console.log("products", JSON.stringify(contentScreen, null, 1));

  const { top } = useSafeAreaInsets();
  const categories = [
    "All",
    "Headphones",
    "Earbuds",
    "Smartwatch",
    "Phone",
    "Camera",
    "Monitor",
    "UPS",
    "Networking",
  ];
  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
          <Feather name="search" size={24} color={"white"} />
        </TouchableOpacity>
      </View>
      <View>
        {contentScreen == true ? (
          categories.map((category, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Categories", category)}
              key={index}
              style={styles.categoryTitle}
            >
              <Text>{category}</Text>
              <AntDesign name="right" size={24} color={"#868D94"} />
            </TouchableOpacity>
          ))
        ) : filteredProducts.length < 1 ? (
          <Text style={{ alignSelf: "center", fontSize: 18 }}>
            Not found...
          </Text>
        ) : (
          <ScrollView contentContainerStyle={styles.productContainer}>
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} product={product}></ProductCard>
            ))}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

export default BrowseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "F2F3F5",
  },
  input: {
    paddingVertical: 12,
    marginTop: 14,
    paddingLeft: 20,
    backgroundColor: "white",
    borderColor: "tomato",
    borderWidth: 2,
    borderRadius: 12,
    marginBottom: 20,
  },
  searchButton: {
    position: "absolute",
    right: 0,
    top: 15,
    backgroundColor: "tomato",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  categoryTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 12,
    marginBottom: 2,
  },
  productContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    rowGap: 20,
  },
});
