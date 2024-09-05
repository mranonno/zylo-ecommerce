import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, Feather } from "@expo/vector-icons";

const FavoriteCard = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 28,
            padding: 10,
          }}
        >
          <Image
            style={{ width: 76, height: 76 }}
            source={{ uri: "https://i.ibb.co/CK6PnS0/headphone-Black.png" }}
          />
        </View>
        <View>
          <Text style={{ fontWeight: "900", fontSize: 18, color: "tomato" }}>
            $90.30
          </Text>
          <Text style={{ fontSize: 16, fontWeight: 500 }}>
            SONY Premium {"\n"}Wireless Headphone
          </Text>
          <View>
            <Text style={{ color: "#868D94" }}>Model:SXD083, Black</Text>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
        <TouchableOpacity>
          <Feather name="shopping-cart" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="heart" size={24} color="tomato" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FavoriteCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
