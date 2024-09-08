import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AntDesign, Feather } from "@expo/vector-icons";

const BrowseScreen = () => {
  const { top } = useSafeAreaInsets();
  const categories = ["All", "Audio", "Mobile", "Electronics"];
  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <View>
        <TextInput style={styles.input} placeholder="Search" />
        <TouchableOpacity style={styles.searchButton}>
          <Feather name="search" size={24} color={"white"} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.categoryTitle}>
        <Text>Audio</Text>
        <AntDesign name="right" size={24} color={"#868D94"} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryTitle}>
        <Text>Mobile</Text>
        <AntDesign name="right" size={24} color={"#868D94"} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryTitle}>
        <Text>Electronics</Text>
        <AntDesign name="right" size={24} color={"#868D94"} />
      </TouchableOpacity>
    </View>
  );
};

export default BrowseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "F2F3F5",
  },
  input: {
    paddingVertical: 12,
    marginTop: 14,
    paddingLeft: 20,
    backgroundColor: "white",
    borderColor: "tomato",
    borderWidth: 2,
    borderRadius: 12,
    marginBottom: 20,
  },
  searchButton: {
    position: "absolute",
    right: 0,
    top: 15,
    backgroundColor: "tomato",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  categoryTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 12,
    marginBottom: 2,
  },
});
