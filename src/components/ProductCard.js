import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <View style={{ width: "48%" }}>
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
          style={{ width: 96, height: 96 }}
          source={{ uri: "https://i.ibb.co/CK6PnS0/headphone-Black.png" }}
        />
      </View>
      <Text style={{ fontWeight: "900", fontSize: 20, color: "tomato" }}>
        $90.30
      </Text>
      <Text style={{ fontSize: 16, fontWeight: 600 }}>
        SONY Premium {"\n"}Wireless Headphone
      </Text>
      <View>
        <Text style={{ color: "#868D94" }}>Model:SXD083, Black</Text>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
