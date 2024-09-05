import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({ product }) => {
  const navigation = useNavigation();
  console.log(product.name);
  const url = product.image;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetails", product)}
      style={{ width: "48%" }}
    >
      <View>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 12,
            padding: 30,
            alignItems: "center",
            justifyContent: "center",
            height: 160,
            marginBottom: 8,
          }}
        >
          <Image
            style={{ width: "85%", height: "100%" }}
            source={{ uri: url }}
          />
        </View>
        <Text style={{ fontWeight: "900", fontSize: 20, color: "tomato" }}>
          $90.30
        </Text>
        <Text style={{ fontSize: 16, fontWeight: 600 }}>{product.name}</Text>
        <View>
          <Text style={{ color: "#868D94" }}>Model:SXD083, Black</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
