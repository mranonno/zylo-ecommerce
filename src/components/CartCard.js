import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MainContext } from "../Context/MainContext";

const CartCard = ({ product }) => {
  const { removeFromCart } = useContext(MainContext);
  const url = product.image;

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
    alert("Product removed from cart!");
  };
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 28,
            padding: 10,
          }}
        >
          <Image
            style={{ width: 76, height: 76, resizeMode: "contain" }}
            source={{ uri: url }}
          />
        </View>
        <View>
          <Text style={{ fontWeight: "900", fontSize: 18, color: "tomato" }}>
            ${product.price}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: 500, maxWidth: "90%" }}>
            {product.name}
          </Text>
          <View>
            <Text style={{ color: "#868D94" }}>Model:SXD083, Black</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity onPress={handleRemoveFromCart}>
        <MaterialIcons name="delete" size={28} color="red" />
      </TouchableOpacity>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkout: {},
});
