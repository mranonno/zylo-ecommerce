import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import FavoriteCard from "../components/FavoriteCard";
import { MainContext } from "../Context/MainContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import favoriteEmpty from "../../assets/favorite.png";

const FavoritesScreen = () => {
  const { top } = useSafeAreaInsets();
  const { favorites } = useContext(MainContext);
  return (
    <View style={[styles.mainContainer, { paddingTop: top }]}>
      <View style={[styles.stickyHeader, { paddingTop: top }]}>
        <Text style={styles.favorites}>Favorites</Text>
      </View>
      {favorites.length < 1 ? (
        <View style={styles.emptyContainer}>
          <Image style={styles.emptyImage} source={favoriteEmpty} />
          <Text style={styles.emptyText}>Opps!!</Text>
          <Text>Your favorites list is empty!</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.favoritesContainer}>
            {favorites.map((product, index) => (
              <FavoriteCard product={product} key={index} />
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  emptyContainer: {
    alignItems: "center",
    top: "30%",
  },
  emptyText: {
    color: "#3d4f9d",
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 10,
  },
  emptyImage: {
    resizeMode: "contain",
    width: "50%",
  },
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
    marginTop: 40,
    paddingBottom: 80,
  },
});
