import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useContext, useState } from "react";
import ProductCard from "../components/ProductCard";
import { MainContext } from "../Context/MainContex";
const HomeScreen = () => {
  const categories = ["All", "Audio", "Mobile"];
  const { allProducts } = useContext(MainContext);
  console.log(allProducts);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.userName}>Hello Michael</Text>
      <View style={styles.category}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index}>
            <Text style={{ fontSize: 16, fontWeight: 500 }}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 20,
          marginBottom: 8,
        }}
      >
        <Text style={styles.title}>Deals of the day</Text>
        <TouchableOpacity>
          <Text style={{ color: "#868D94", fontSize: 16, fontWeight: 600 }}>
            See all
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 12,
          flexDirection: "row",
          gap: 32,
        }}
      >
        <Image
          style={{ width: 96, height: 96 }}
          source={require("../../assets/image/microphone.png")}
        />
        <View>
          <Text style={{ color: "#868D94", fontWeight: 600 }}>Microphones</Text>
          <View style={{ flexDirection: "row", gap: 12 }}>
            <Text style={{ color: "tomato", fontWeight: 900 }}>$108.20</Text>
            <Text
              style={{ textDecorationLine: "line-through", color: "#B0B5B9s" }}
            >
              $199.99
            </Text>
          </View>
          <Text style={{ fontWeight: 500, fontSize: 24 }}>RODE PodMic</Text>
          <Text style={{ color: "#868D94" }}>
            Dynamic microphone, Speaker {"\n"}microphone
          </Text>
        </View>
      </View>
      <View style={{ marginBottom: 8, marginTop: 28 }}>
        <Text style={styles.title}>Recommended for you</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          rowGap: 20,
        }}
      >
        {allProducts?.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
        <ProductCard />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { margin: 20 },
  userName: { fontSize: 36, marginTop: 20, marginBottom: 8, fontWeight: "800" },
  category: {
    alignItems: "center",
    flexDirection: "row",
    gap: 32,
  },

  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "black",
  },
});
