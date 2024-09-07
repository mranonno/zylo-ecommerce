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
import { showToast } from "../components/HelpingComponents";
import { AntDesign, Feather } from "@expo/vector-icons";

const ProductDetailsScreen = ({ route }) => {
  const { addToCart, carts, favorites, addToFavorite, removeFromFavorite } =
    useContext(MainContext);
  const product = route.params;
  const url = product?.image || "https://i.ibb.co/CK6PnS0/headphone-Black.png";
  const isProductInCart = carts.find((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (isProductInCart) {
      showToast("Already Added!", "black");
    } else {
      addToCart(product);
      showToast("Added to cart!", "black");
    }
  };

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
    <View>
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
          <View style={styles.buttonMainContainer}>
            <TouchableOpacity onPress={handleAddToCart}>
              <Feather name="shopping-cart" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleFavorites}>
              <AntDesign
                name={isFavorite ? "heart" : "hearto"}
                size={24}
                color="tomato"
              />
            </TouchableOpacity>
          </View>
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
            audio experience featuring 40mm drivers and LDAC support. They
            provide up to 30 hours of battery life with noise-cancelling on and
            quick charge capability, comfortable ear pads for extended use, and
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
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  buttonMainContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
    flexDirection: "column",
    gap: 16,
  },
});
