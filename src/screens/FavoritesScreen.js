import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import FavoriteCard from "../components/FavoriteCard";

const FavoritesScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.favorites}>Favorites</Text>
      <View style={styles.favoritesContainer}>
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
        <FavoriteCard />
      </View>
    </ScrollView>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#f9f9f9" },
  favorites: {
    fontSize: 28,
    marginHorizontal: "auto",
    marginTop: 30,
    marginBottom: 16,
    fontWeight: "800",
  },
  favoritesContainer: {
    flexDirection: "column",
    rowGap: 12,
  },
});
