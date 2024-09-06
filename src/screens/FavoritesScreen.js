import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import FavoriteCard from "../components/FavoriteCard";
import { MainContext } from "../Context/MainContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const FavoritesScreen = () => {
  const { top } = useSafeAreaInsets();
  const { favorites } = useContext(MainContext);
  return (
    <View style={[styles.mainContainer, { paddingTop: top }]}>
      <View style={[styles.stickyHeader, { paddingTop: top }]}>
        <Text style={styles.favorites}>Favorites</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.favoritesContainer}>
          {favorites.map((product, index) => (
            <FavoriteCard product={product} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#F2F3F5",
    flex: 1,
  },
  favorites: {
    fontSize: 28,
    marginHorizontal: "auto",
    fontWeight: "800",
  },
  favoritesContainer: {
    flexDirection: "column",
    rowGap: 12,
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
  scrollContainer: {
    padding: 20,
    marginTop: 68,
    paddingBottom: 80,
  },
});
