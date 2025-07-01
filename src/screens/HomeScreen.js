import { StyleSheet, Text, View, StatusBar, FlatList } from "react-native";
import { useContext, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { MainContext } from "../Context/MainContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../Redux/Slice/ProductSlice";
import CategorySlider from "../components/CategorySlider";
import HomeScreenBanner from "../components/HomeScreenBanner";
import HomeScreenHeader from "../components/HomeScreenHeader";

const HomeScreen = () => {
  const { allProducts, categories, bannerProducts } = useContext(MainContext);
  const dispatch = useDispatch();
  const { top } = useSafeAreaInsets();

  useEffect(() => {
    dispatch(setProducts(allProducts));
  }, []);

  const { products } = useSelector((state) => state.products);

  const renderHeader = () => (
    <>
      <HomeScreenHeader />
      <CategorySlider categories={categories} />
      <HomeScreenBanner bannerProducts={bannerProducts} />
      <View style={styles.recommendedText}>
        <Text style={styles.title}>Recommended for you</Text>
      </View>
    </>
  );
  if (!products?.length) {
    return <Text style={{ padding: 20 }}>Loading products...</Text>;
  }

  return (
    <View style={[styles.mainContainer, { paddingTop: top }]}>
      <StatusBar
        translucent={true}
        backgroundColor={"white"}
        barStyle={"dark-content"}
      />

      <FlatList
        data={products}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
        numColumns={2}
        renderItem={({ item }) => <ProductCard product={item} />}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.container}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={{ textAlign: "center", marginTop: 50, color: "#777" }}>
            No products available.
          </Text>
        )}
        initialNumToRender={6}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F2F3F5",
  },
  container: {
    paddingHorizontal: 12,
  },
  recommendedText: {
    marginBottom: 10,
    marginTop: 28,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "black",
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 12,
  },
});
