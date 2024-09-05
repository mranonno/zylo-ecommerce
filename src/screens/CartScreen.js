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

const CartScreen = () => {
  const { carts } = useContext(MainContext);
  console.log(carts);
  return (
    <View style={styles.container}>
      <View style={styles.stickyHeader}>
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
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                Total{" "}
                <Text
                  style={{
                    color: "#B0B5B9",
                    fontWeight: "normal",
                    fontSize: 14,
                  }}
                >
                  {" "}
                  VAT included
                </Text>
              </Text>
              <Text
                style={{ fontWeight: "bold", fontSize: 18, color: "tomato" }}
              >
                $160
              </Text>
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
    backgroundColor: "#f9f9f9",
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
    paddingTop: 30,
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
    marginTop: 68,
    backgroundColor: "#f9f9f9",
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
});
