import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, Feather } from "@expo/vector-icons";

const FavoriteCard = ({ product }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.cardImage}
          source={{ uri: "https://i.ibb.co/CK6PnS0/headphone-Black.png" }}
        />
      </View>
      <View style={styles.itemDetailsContainer}>
        <Text style={styles.productPriceText}>
          ${product?.price || "00.00"}
        </Text>
        <Text style={styles.productNameText}>
          {product.name || "Unavailable"}
        </Text>
        <Text style={styles.productModelText}>{"Unavailable"}</Text>
      </View>
      <View style={styles.buttonMainContainer}>
        <TouchableOpacity>
          <Feather name="shopping-cart" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
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
