import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  Animated,
  Alert,
} from "react-native";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { MainContext } from "../Context/MainContext";
import { showToast } from "./HelpingComponents";
import { useScaleOnPress } from "../hooks/useScaleOnPress";
import { useWindowDimensions } from "react-native";

const ProductCard = ({ product }) => {
  const navigation = useNavigation();
  const { scale, onPressIn, onPressOut } = useScaleOnPress();
  const { width: screenWidth } = useWindowDimensions();
  const cardGap = 12;
  const cardWidth = (screenWidth - 12 * 2 - cardGap) / 2;

  const { addToFavorite, favorites, removeFromFavorite } =
    useContext(MainContext);

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
    <Pressable
      android_ripple={{ color: "#eee" }}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={() => navigation.navigate("ProductDetails", product)}
    >
      <Animated.View
        style={[
          styles.mainContainer,
          { width: cardWidth, transform: [{ scale }] },
        ]}
      >
        <View style={styles.productImageContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleFavorites}
            style={styles.favoriteButton}
          >
            <AntDesign
              name={isFavorite ? "heart" : "hearto"}
              size={16}
              color={"tomato"}
            />
          </TouchableOpacity>
          <Image
            style={styles.productImage}
            source={{ uri: product.image }}
            resizeMode="contain"
          />
        </View>
        <Text numberOfLines={2} style={styles.productNameText}>
          {product.name || "Unavailable"}
        </Text>
        <View style={styles.priceContainer}>
          <Text style={styles.offerPriceText}>
            {product?.offerPrice || product?.price || "00.00"}৳
          </Text>
          {product?.offerPrice && (
            <Text style={styles.productPriceText}>{product?.price}৳</Text>
          )}
        </View>
        <TouchableOpacity
          style={styles.buyButton}
          onPress={() => {
            // You can replace this with your real "Add to Cart" logic
            Alert.alert("Buy", `You clicked Buy for ${product.name}`);
          }}
        >
          <Text style={styles.buyButtonText}>Buy Now</Text>
        </TouchableOpacity>
      </Animated.View>
    </Pressable>
  );
};

export default ProductCard;
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
  },

  productImageContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    height: 140,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  },
  productImage: {
    width: "100%",
    height: "100%",
  },
  priceContainer: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  productPriceText: {
    fontWeight: "600",
    fontSize: 16,
    color: "gray",
    textDecorationLine: "line-through",
  },
  offerPriceText: {
    fontWeight: "800",
    fontSize: 18,
    color: "tomato",
  },

  productNameText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginVertical: 12,
  },
  productModelText: {
    color: "#868D94",
    fontSize: 13,
  },
  favoriteButton: {
    position: "absolute",
    top: 6,
    right: 6,
    padding: 4,
    borderRadius: 50,
    backgroundColor: "#fff",
    zIndex: 10,
    elevation: 1,
  },

  buyButton: {
    marginTop: 12,
    backgroundColor: "tomato",
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: "center",
  },

  buyButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
