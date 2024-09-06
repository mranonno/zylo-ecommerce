import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import { MainContext } from "../Context/MainContext";

const FavoriteCard = ({ product }) => {
  const { removeFromFavorite } = useContext(MainContext);
  const url = product.image;
  const handleRemoveFromFavorite = () => {
    removeFromFavorite(product.id);
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.cardImage} source={{ uri: url }} />
      </View>
      <View style={styles.itemDetailsContainer}>
        <Text style={styles.productPriceText}>
          ${product?.price || "00.00"}
        </Text>
        <Text style={styles.productNameText}>
          {product.name || "Unavailable"}
        </Text>
        <Text style={styles.productModelText}>
          {product.model}, {product.color}
        </Text>
      </View>
      <View style={styles.buttonMainContainer}>
        <TouchableOpacity>
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

{
  /* <View style={styles.checkoutContainer}>
  <View style={{ width: "65%" }}>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text>Shipping</Text>
      <Text style={{ color: "tomato" }}>$120</Text>
    </View>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>
        Total{" "}
        <Text
          style={{
            color: "#B0B5B9",
            fontWeight: "normal",
            fontSize: 14,
          }}
        >
          {" "}
          VAT included
        </Text>
      </Text>
      <Text style={{ fontWeight: "bold", fontSize: 18, color: "tomato" }}>
        $160
      </Text>
    </View>
  </View>
  <TouchableOpacity style={styles.checkoutButton}>
    <Text style={styles.checkoutButtonText}>Checkout</Text>
  </TouchableOpacity>
</View>; */
}
