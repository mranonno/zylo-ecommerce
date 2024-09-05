import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import CartCard from "../components/CartCard";

const CartScreen = () => {
  return (
    <View Style={styles.container}>
      <View style={styles.stickyHeader}>
        <Text style={styles.cart}>Cart</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cartContainer}>
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
        </View>
      </ScrollView>
      <View style={styles.checkoutContainer}>
        <View style={{ width: "65%" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text>Shipping</Text>
            <Text style={{ color: "tomato" }}>$120</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontWeight: 900, fontSize: 18 }}>
              Total{" "}
              <Text style={{ color: "#B0B5B9", fontWeight: 400, fontSize: 14 }}>
                {" "}
                VAT included
              </Text>
            </Text>
            <Text style={{ fontWeight: 900, fontSize: 18, color: "tomato" }}>
              $160
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "tomato",
            paddingVertical: 8,
            paddingHorizontal: 12,
            borderRadius: 12,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: 600, fontSize: 18 }}>
            Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "red", flex: 1 },
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
    paddingTop: 40,
    paddingBottom: 10,
  },
  cartContainer: {
    flexDirection: "column",
    rowGap: 12,
  },
  scrollContainer: {
    padding: 20,
    marginTop: 78,
    backgroundColor: "#f9f9f9",
  },
  checkoutContainer: {
    position: "absolute",
    paddingHorizontal: 20,
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "white",
    zIndex: 1,
  },
});
