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
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.cart}>Cart</Text>
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
      <View>
        <View
          style={{
            borderBottomColor: "white",
            borderBottomWidth: 1,
            marginVertical: 10,
          }}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontWeight: 600 }}>Shipping</Text>
          <Text style={{ fontWeight: 600 }}>$120</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontWeight: 900, fontSize: 18 }}>
            Total{" "}
            <Text style={{ color: "#B0B5B9", fontWeight: 400, fontSize: 14 }}>
              {" "}
              VAT included
            </Text>
          </Text>
          <Text style={{ fontWeight: 900, fontSize: 18 }}>$160</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "tomato",
            paddingVertical: 16,
            borderRadius: 12,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: 600, fontSize: 18 }}>
            Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#f9f9f9" },
  cart: {
    fontSize: 28,
    marginHorizontal: "auto",
    marginTop: 30,
    marginBottom: 16,
    fontWeight: "800",
  },
  cartContainer: {
    flexDirection: "column",
    rowGap: 12,
  },
});
