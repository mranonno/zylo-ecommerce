import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { MainContext } from "../Context/MainContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../Redux/Slice/ProductSlice";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const { categories } = useContext(MainContext);
  const { allProducts } = useContext(MainContext);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { top } = useSafeAreaInsets();

  useEffect(() => {
    dispatch(setProducts(allProducts));
  }, []);
  const { products } = useSelector((state) => state.products);
  return (
    <View style={[styles.mainContainer, { paddingTop: top }]}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.userName}>Hello Michael</Text>
        <View style={styles.category}>
          {categories.map((category, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Categories", category)}
              key={index}
            >
              <Text style={styles.categoryButton}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.dealContainer}>
          <Text style={styles.title}>Deals of the day</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllButton}>See all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.singleCardImageContainer}>
          <Image
            style={styles.singleCardImage}
            source={require("../../assets/image/microphone.png")}
          />
          <View>
            <Text style={styles.singleCardCategoryText}>Microphones</Text>
            <View style={styles.singleCardPriceContainer}>
              <Text style={styles.singleCardPrice}>$108.20</Text>
              <Text style={styles.singleCardDiscountPrice}>$199.99</Text>
            </View>
            <Text style={styles.singleCardProductTitle}>RODE PodMic</Text>
            <Text style={styles.SingleCardModelText}>
              Dynamic microphone, Speaker {"\n"}microphone
            </Text>
          </View>
        </View>
        <View style={styles.recommendedText}>
          <Text style={styles.title}>Recommended for you</Text>
        </View>
        <View style={styles.allProductContainer}>
          {products?.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  SingleCardModelText: {
    color: "#868D94",
  },
  categoryButton: { fontSize: 16 },
  dealContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 10,
  },
  seeAllButton: {
    color: "#868D94",
    fontSize: 16,
    fontWeight: "600",
  },
  singleCardImageContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    flexDirection: "row",
    gap: 32,
  },
  singleCardImage: {
    width: 96,
    height: 96,
    resizeMode: "contain",
  },
  singleCardCategoryText: {
    color: "#868D94",
    fontWeight: "600",
    fontSize: 16,
  },
  singleCardPriceContainer: {
    flexDirection: "row",
    gap: 12,
  },
  singleCardProductTitle: {
    fontWeight: "500",
    fontSize: 24,
  },
  singleCardPrice: {
    color: "tomato",
    fontSize: 20,
    fontWeight: "900",
  },
  singleCardDiscountPrice: {
    textDecorationLine: "line-through",
    fontSize: 16,
    color: "#868D94",
  },
  recommendedText: { marginBottom: 10, marginTop: 28 },
  allProductContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    rowGap: 20,
  },
  mainContainer: {
    flex: 1,
  },
  container: { padding: 20, paddingTop: 0, backgroundColor: "#F2F3F5" },
  userName: { fontSize: 36, marginTop: 20, marginBottom: 8, fontWeight: "800" },
  category: {
    alignItems: "center",
    flexDirection: "row",
    gap: 32,
  },

  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "black",
  },
});
