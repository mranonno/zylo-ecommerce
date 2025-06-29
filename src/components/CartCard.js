import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MainContext } from "../Context/MainContext";
import { showToast } from "./HelpingComponents";
import { useNavigation } from "@react-navigation/native";

const CartCard = ({ product }) => {
  const navigation = useNavigation();
  const { removeFromCart } = useContext(MainContext);
  const url = product.image;

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
    showToast("Removed from cart!", "black");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("ProductDetails", product)}
      >
        <View style={styles.imageContainer}>
          <Image style={styles.cardImage} source={{ uri: url }} />
        </View>
      </TouchableOpacity>
      <View style={styles.itemDetailsContainer}>
        <Text style={styles.productPriceText}>
          ${product?.price || "00.00"}
        </Text>
        <Text style={styles.productNameText}>
          {product.name || "Unavailable"}
        </Text>
        <Text style={styles.productModelText}>
          Model: {product.model}, {product.color}
        </Text>
      </View>
      <View style={styles.buttonMainContainer}>
        <TouchableOpacity onPress={handleRemoveFromCart}>
          <MaterialIcons name="delete" size={28} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  buttonMainContainer: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    flex: 0.1,
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
    flex: 0.6,
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
