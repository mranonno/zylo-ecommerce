import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import FavoriteCard from "../components/FavoriteCard";

const FavoritesScreen = () => {
  return (
    <View>
      <View style={styles.stickyHeader}>
        <Text style={styles.favorites}>Favorites</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
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
    paddingTop: 30,
    paddingBottom: 10,
  },
  scrollContainer: {
    padding: 20,
    marginTop: 68,
    backgroundColor: "#f9f9f9",
    paddingBottom: 80,
  },
});
