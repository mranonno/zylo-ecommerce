import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { MainContext } from "../Context/MainContext";
import { showToast } from "./HelpingComponents";

const ProductCard = ({ product }) => {
  const navigation = useNavigation();
  const { addToFavorite, favorites, removeFromFavorite } =
    useContext(MainContext);
  const url = product.image;
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
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetails", product)}
      style={styles.mainContainer}
    >
      <View>
        <View style={styles.productImageContainer}>
          <TouchableOpacity
            onPress={handleFavorites}
            style={styles.favoriteButton}
          >
            <AntDesign
              name={isFavorite ? "heart" : "hearto"}
              size={20}
              color={"tomato"}
            />
          </TouchableOpacity>
          <Image style={styles.productImage} source={{ uri: url }} />
        </View>
        <Text style={styles.productPriceText}>${product.price || "00:00"}</Text>
        <Text style={styles.productNameText}>
          {product.name || "unavailable"}
        </Text>
        <View>
          <Text style={styles.productModelText}>
            Model: {product.model || "unavailable"},{" "}
            {product.color || "unavailable"}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  mainContainer: { width: "48%" },
  productImage: {
    width: "85%",
    height: "100%",
    resizeMode: "contain",
  },
  productPriceText: {
    fontWeight: "900",
    fontSize: 20,
    color: "tomato",
  },
  productNameText: {
    fontSize: 16,
    fontWeight: "600",
  },
  productModelText: {
    color: "#868D94",
  },
  favoriteButton: {
    position: "absolute",
    top: 5,
    right: 5,
    padding: 8,
    borderRadius: 50,
    backgroundColor: "#F2F3F5",
    zIndex: 1,
  },
  productImageContainer: {
    backgroundColor: "white",
    borderRadius: 24,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
    height: 160,
    marginBottom: 8,
    position: "relative",
  },
});
