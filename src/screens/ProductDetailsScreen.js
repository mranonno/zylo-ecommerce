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

const ProductDetailsScreen = ({ route }) => {
  const { addToCart, carts } = useContext(MainContext);
  const product = route.params;
  console.log(product);
  console.log(carts);
  const url = product.image;
  const isProductInCart = carts.find((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (isProductInCart) {
      alert("Product is already in the cart!");
    } else {
      addToCart(product);
      alert("Product added to cart!");
    }
  };
  return (
    <ScrollView style={{ padding: 20 }}>
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 28,
          padding: 50,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Image style={{ width: "100%", height: 280 }} source={{ uri: url }} />
      </View>
      <View style={{ padding: 10 }}>
        <Text style={{ fontWeight: "900", fontSize: 28, color: "tomato" }}>
          ${product.price}
        </Text>
        <Text style={{ fontSize: 24, fontWeight: 500 }}>{product.name}</Text>
        <View>
          <Text style={{ color: "#868D94", fontSize: 18 }}>
            Model:SXD083, Black
          </Text>
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 16, lineHeight: 24 }}>
          The Sony WH-1000XM5 Premium Wireless Headphones offer advanced noise
          cancellation with Dual Noise Sensor technology and a high-resolution
          audio experience featuring 40mm drivers and LDAC support. They provide
          up to 30 hours of battery life with noise-cancelling on and quick
          charge capability, comfortable ear pads for extended use, and
          intuitive touch controls. Bluetooth 5.2 ensures stable connectivity,
          while compatibility with Google Assistant and Amazon Alexa enhances
          hands-free control. Additional features include adaptive sound
          control, environmental awareness, and customizable sound settings
          through the Sony Headphones Connect app.
        </Text>
      </View>
      <TouchableOpacity
        onPress={handleAddToCart}
        style={{
          paddingVertical: 12,
          borderRadius: 12,
          marginBottom: 40,
          marginTop: 20,
          backgroundColor: "tomato",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 18, fontWeight: 700 }}>
          Add to cart
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({});
