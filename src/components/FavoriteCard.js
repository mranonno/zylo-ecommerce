import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import { MainContext } from "../Context/MainContext";
import { showToast } from "./HelpingComponents";

const FavoriteCard = ({ product }) => {
  const { removeFromFavorite, addToCart, carts } = useContext(MainContext);
  const url = product.image;
  const handleRemoveFromFavorite = () => {
    removeFromFavorite(product.id);
    showToast("Removed from favorite!", "black");
  };

  const isProductInCart = carts.find((item) => item.id === product.id);
  const handleAddToCart = () => {
    if (isProductInCart) {
      showToast("Already Added!", "black");
    } else {
      addToCart(product);
      showToast("Added to cart!", "black");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.cardImage} source={{ uri: url }} />
      </View>
      <View style={styles.itemDetailsContainer}>
        <Text style={styles.productPriceText}>${product?.price || "00"}</Text>
        <Text style={styles.productNameText}>
          {product.name || "Unavailable"}
        </Text>
        <Text style={styles.productModelText}>
          Model: {product.model}, {product.color}
        </Text>
      </View>
      <View style={styles.buttonMainContainer}>
        <TouchableOpacity onPress={handleAddToCart}>
          <Feather name="shopping-cart" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRemoveFromFavorite}>
          <AntDesign name="heart" size={24} color="tomato" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FavoriteCard;

const styles = StyleSheet.create({
  buttonMainContainer: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    flex: 0.2,
  },
  productModelText: {
    color: "gray",
  },
  productNameText: {
    fontWeight: "500",
    fontSize: 16,
  },
  productPriceText: {
    fontWeight: "900",
    fontSize: 18,
    color: "tomato",
  },
  itemDetailsContainer: {
    flex: 0.5,
  },
  imageContainer: {
    flex: 0.3,
    backgroundColor: "white",
    borderRadius: 28,
    padding: 10,
  },
  cardImage: {
    width: 76,
    height: 76,
    alignSelf: "center",
    resizeMode: "contain",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
  },
});
