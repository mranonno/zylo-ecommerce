import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useContext } from "react";
import CartCard from "../components/CartCard";
import { MainContext } from "../Context/MainContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import shoppingCartEmpty from "../../assets/shopping.png";

const CartScreen = () => {
  const { carts } = useContext(MainContext);
  const { top } = useSafeAreaInsets();
  const shippingPrice = 10 * carts.length;
  const price = carts.reduce((total, cart) => total + cart.price, 0);
  const initialTotalPrice = price + shippingPrice;
  const totalPrice = initialTotalPrice.toFixed(2);

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <View style={[styles.stickyHeader, { paddingTop: top }]}>
        <Text style={styles.cart}>Cart</Text>
      </View>
      <View style={styles.contentContainer}>
        {carts.length < 1 ? (
          <View style={styles.emptyContainer}>
            <Image style={styles.emptyImage} source={shoppingCartEmpty} />
            <Text style={styles.emptyText}>Oops!!</Text>
            <Text>Your shopping cart is empty!</Text>
          </View>
        ) : (
          <FlatList
            data={carts}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <CartCard product={item} />}
            contentContainerStyle={styles.scrollContainer}
            ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
          />
        )}

        <View style={styles.checkoutContainer}>
          <View style={{ width: "65%" }}>
            <View style={styles.checkOutShipping}>
              <Text>Shipping</Text>
              <Text style={{ color: "tomato" }}>{shippingPrice}</Text>
            </View>
            <View style={styles.totalPriceContainer}>
              <Text style={styles.totalPriceText}>
                Total <Text style={styles.vatText}> VAT included</Text>
              </Text>
              <Text style={styles.totalPriceNumber}>{totalPrice}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutButtonText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  emptyContainer: {
    alignItems: "center",
    top: "33%",
  },
  emptyImage: {
    resizeMode: "contain",
    width: "60%",
  },
  emptyText: {
    color: "#3d4f9d",
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#F2F3F5",
  },
  cart: {
    fontSize: 28,
    marginHorizontal: "auto",
    fontWeight: "800",
  },
  stickyHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    zIndex: 1,
    paddingBottom: 10,
  },
  contentContainer: {
    flex: 1,
    paddingBottom: 59,
  },
  scrollContainer: {
    padding: 20,
    marginTop: 40,
    paddingBottom: 55,
  },
  checkoutContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    zIndex: 1,
  },
  checkoutButton: {
    backgroundColor: "tomato",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  checkoutButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },
  checkOutShipping: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  vatText: {
    color: "#B0B5B9",
    fontWeight: "normal",
    fontSize: 14,
  },
  totalPriceText: { fontWeight: "bold", fontSize: 18 },
  totalPriceNumber: { fontWeight: "bold", fontSize: 18, color: "tomato" },
  totalPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
