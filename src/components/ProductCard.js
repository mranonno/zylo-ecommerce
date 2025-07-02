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
import { useCallback, useContext, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { MainContext } from "../Context/MainContext";
import { showToast } from "./HelpingComponents";
import { useScaleOnPress } from "../hooks/useScaleOnPress";
import { useWindowDimensions } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const ProductCard = ({ product }) => {
  const navigation = useNavigation();
  const { scale, onPressIn, onPressOut } = useScaleOnPress();
  const { width: screenWidth } = useWindowDimensions();
  const cardGap = 12;
  const cardWidth = (screenWidth - 12 * 2 - cardGap) / 2;

  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["50%"], []);
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

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
    <View>
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
      <TouchableOpacity
        style={[styles.button, { marginBottom: 2 }]}
        onPress={() => bottomSheetRef.current?.expand()}
      >
        <Text style={styles.buttonText}>Open Bottom Sheet</Text>
      </TouchableOpacity>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        animateOnMount={true}
        // enableDynamicSizing
        // enableOverDrag={false}
        // enableHandlePanningGesture={false} //Enable or disable down by top bar
        // enableContentPanningGesture={false}   //Enable or disable down by content
        // detached={true}
        // overDragResistanceFactor={6}
        // bottomInset={40} // optional, adds spacing between sheet and screen bottom
        style={{
          marginHorizontal: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 10,
          elevation: 10, // for Android shadow
          borderRadius: 16,
          marginBottom: 20,
        }}
        handleIndicatorStyle
        keyboardBehavior //keyboard: 'interactive', 'extend', 'fillParent'.
        keyboardBlurBehavior //'none' or 'restore' — controls if keyboard should hide on swipe.
        onAnimate
        // animationDuration	Duration (ms) of transition animation.
        // animationConfigs
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
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
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: "center",
  },
});
