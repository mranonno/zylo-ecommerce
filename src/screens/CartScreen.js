import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import CartCard from "../components/CartCard";
import { MainContext } from "../Context/MainContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CartScreen = () => {
  const { carts } = useContext(MainContext);
  const { top } = useSafeAreaInsets();
  const shippingPrice = 10 * carts.length;
  const price = carts.reduce((total, cart) => total + cart.price, 0);
  console.log("price", JSON.stringify(price, null, 1));
  const totalPrice = price + shippingPrice;

  console.log("totalPrice", JSON.stringify(totalPrice, null, 1));
  console.log("shippingPrice", JSON.stringify(shippingPrice, null, 1));
  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <View style={[styles.stickyHeader, { paddingTop: top }]}>
        <Text style={styles.cart}>Cart</Text>
      </View>
      <View style={styles.contentContainer}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.cartContainer}>
            {carts?.map((product, index) => (
              <CartCard product={product} key={index} />
            ))}
          </View>
        </ScrollView>
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
  cartContainer: {
    flexDirection: "column",
    rowGap: 12,
  },
  scrollContainer: {
    padding: 20,
    marginTop: 40,
    paddingBottom: 80,
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
