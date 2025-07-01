import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreenBanner = ({ bannerProducts }) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.dealContainer}>
        <Text style={styles.title}>Deals of the day</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Categories", "All")}
        >
          <Text style={styles.seeAllButton}>See all</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("ProductDetails", bannerProducts)}
        style={styles.singleCardImageContainer}
      >
        <Image
          style={styles.singleCardImage}
          source={require("../../assets/image/microphone.png")}
        />
        <View>
          <Text style={styles.singleCardCategoryText}>Microphones</Text>
          <View style={styles.singleCardPriceContainer}>
            <Text style={styles.singleCardPrice}>$108.20</Text>
            <Text style={styles.singleCardDiscountPrice}>$199.99</Text>
          </View>
          <Text style={styles.singleCardProductTitle}>RODE PodMic</Text>
          <Text style={styles.SingleCardModelText}>
            Dynamic microphone, Speaker {"\n"}microphone
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreenBanner;

const styles = StyleSheet.create({
  dealContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "black",
  },
  seeAllButton: {
    color: "#868D94",
    fontSize: 16,
    fontWeight: "600",
  },
  singleCardImageContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    flexDirection: "row",
    gap: 32,
  },
  singleCardImage: {
    width: 96,
    height: 96,
    resizeMode: "contain",
  },
  singleCardCategoryText: {
    color: "#868D94",
    fontWeight: "600",
    fontSize: 16,
  },
  singleCardPriceContainer: {
    flexDirection: "row",
    gap: 12,
  },
  singleCardProductTitle: {
    fontWeight: "500",
    fontSize: 24,
  },
  singleCardPrice: {
    color: "tomato",
    fontSize: 20,
    fontWeight: "900",
  },
  singleCardDiscountPrice: {
    textDecorationLine: "line-through",
    fontSize: 16,
    color: "#868D94",
  },
});
