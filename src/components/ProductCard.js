import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { MainContext } from "../Context/MainContext";

const ProductCard = ({ product }) => {
  const navigation = useNavigation();
  const { addToFavorite, favorites, removeFromFavorite } =
    useContext(MainContext);
  const isProductInFavorites = favorites.find((item) => item.id === product.id);
  console.log(product.name);
  const isFavorite = favorites.find((item) => item.id === product.id);
  const url = product.image;
  const handleFavorites = () => {
    if (isProductInFavorites) {
      removeFromFavorite(product.id);
      alert("Product remove from favorite!");
    } else {
      addToFavorite(product);
      alert("Product added to favorite!");
    }
  };
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetails", product)}
      style={{ width: "48%" }}
    >
      <View>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 24,
            padding: 30,
            alignItems: "center",
            justifyContent: "center",
            height: 160,
            marginBottom: 8,
            position: "relative",
          }}
        >
          <TouchableOpacity
            onPress={handleFavorites}
            style={{
              position: "absolute",
              top: 5,
              right: 5,
              padding: 8,
              borderRadius: 50,
              backgroundColor: "#F9F9F9",
              zIndex: 1,
            }}
          >
            <AntDesign
              name={isFavorite ? "heart" : "hearto"}
              size={24}
              color={"tomato"}
            />
          </TouchableOpacity>
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
