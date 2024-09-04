import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.name}>Hello Michael!!</Text>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          gap: 20,
          marginLeft: 20,
        }}
      >
        <TouchableOpacity>
          <Text>All</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Audio</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Mobile</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginRight: 20,
        }}
      >
        <Text style={styles.deals}>Deals of the day</Text>
        <TouchableOpacity>
          <Text>See all</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 12,
          marginHorizontal: 20,
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
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  name: { fontSize: 36, marginTop: 40, marginLeft: 20, fontWeight: "700" },

  deals: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black", // Example color
    margin: 20,
  },
});
