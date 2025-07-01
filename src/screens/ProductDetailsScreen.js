import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import { MainContext } from "../Context/MainContext";
import { showToast } from "../components/HelpingComponents";
import { AntDesign, Feather } from "@expo/vector-icons";

const ProductDetailsScreen = ({ route }) => {
  const { addToCart, carts, favorites, addToFavorite, removeFromFavorite } =
    useContext(MainContext);
  const product = route.params;
  const url = product?.image || "https://i.ibb.co/CK6PnS0/headphone-Black.png";
  const isProductInCart = carts.find((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (isProductInCart) {
      showToast("Already Added!", "black");
    } else {
      addToCart(product);
      showToast("Added to cart!", "black");
    }
  };

  const isFavorite = favorites.find((item) => item.id === product.id);
  const handleFavorites = () => {
    if (isFavorite) {
      removeFromFavorite(product.id);
      showToast("Removed from favorite!", "black");
    } else {
      addToFavorite(product);
      showToast("Added to favorite!", "black");
    }
  };
  return (
    <View>
      <ScrollView style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.productImage} source={{ uri: url }} />
          <View style={styles.buttonMainContainer}>
            <TouchableOpacity onPress={handleAddToCart}>
              <Feather name="shopping-cart" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleFavorites}>
              <AntDesign
                name={isFavorite ? "heart" : "hearto"}
                size={24}
                color="tomato"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.productDetailsContainer}>
          <View style={styles.priceContainer}>
            <Text style={styles.offerPriceText}>
              {product?.offerPrice || product?.price || "00.00"}৳
            </Text>
            {product?.offerPrice && (
              <Text style={styles.productPriceText}>{product?.price}৳</Text>
            )}
          </View>
          <Text style={styles.productNameText}>
            {product.name || "unavailable"}
          </Text>
          <View>
            <Text style={styles.productModelText}>
              Model: {product.model || "unavailable"},{" "}
              {product.color || "unavailable"}
            </Text>
          </View>
          <View>
            <Text style={styles.productDetailsTitle}>Product Details:</Text>
            <Text style={styles.productDetailsText}>
              {product.description || "unavailable"}
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleAddToCart}
            style={styles.addToCartButton}
          >
            <Text style={styles.addToCardButtonText}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
  },
  imageContainer: {
    backgroundColor: "white",
    borderRadius: 28,
    padding: 50,
    flexDirection: "row",
    justifyContent: "center",
  },
  productImage: { width: "100%", height: 280, resizeMode: "contain" },
  productDetailsContainer: { marginTop: 20 },
  productNameText: {
    fontSize: 24,
    fontWeight: "500",
    marginTop: 8,
  },
  productModelText: {
    color: "#868D94",
    fontSize: 18,
    marginBottom: 12,
  },
  priceContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  productPriceText: {
    fontWeight: "600",
    fontSize: 18,
    color: "gray",
    textDecorationLine: "line-through",
  },
  offerPriceText: {
    fontWeight: "800",
    fontSize: 24,
    color: "tomato",
  },
  productDetailsTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 4,
  },
  productDetailsText: {
    fontSize: 16,
    lineHeight: 24,
  },
  addToCardButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
  addToCartButton: {
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 40,
    marginTop: 20,
    backgroundColor: "tomato",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonMainContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
    flexDirection: "column",
    gap: 16,
  },
});
