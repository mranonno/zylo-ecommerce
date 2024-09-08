import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  AntDesign,
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View>
      <View style={[styles.stickyHeader, { paddingTop: top }]}>
        <Text style={styles.profile}>Profile</Text>
      </View>
      <View style={styles.profileContainer}>
        <View style={[styles.profileSectionDoubleLine, { paddingBottom: 20 }]}>
          <View>
            <Text style={styles.userName}>Michael Ford</Text>
            <Text style={styles.userEmail}>Email: michael@gmail.com</Text>
          </View>
          <FontAwesome name="user-circle-o" size={32} color={"black"} />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Orders")}
          style={styles.profileSectionDoubleLine}
        >
          <View>
            <Text style={styles.textTitle}>Orders</Text>
            <Text style={styles.textSubTitle}>Find your orders</Text>
          </View>
          <AntDesign name="inbox" size={24} color={"black"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("EditProfiles")}
          style={styles.profileSectionDoubleLine}
        >
          <View>
            <Text style={styles.textTitle}>Profile</Text>
            <Text style={styles.textSubTitle}>Manage your profile</Text>
          </View>
          <FontAwesome name="user-circle-o" size={24} color={"black"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Support")}
          style={styles.profileSectionDoubleLine}
        >
          <View>
            <Text style={styles.textTitle}>Support</Text>
            <Text style={styles.textSubTitle}>Help center</Text>
          </View>
          <MaterialIcons name="support-agent" size={24} color={"black"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("DeliveryAndReturn")}
          style={styles.profileSectionSingleLine}
        >
          <View>
            <Text style={styles.textTitle}>Delivery & Return policy</Text>
          </View>
          <MaterialCommunityIcons
            name="truck-delivery-outline"
            size={24}
            color={"black"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("TermsAndCondition")}
          style={styles.profileSectionSingleLine}
        >
          <View>
            <Text style={styles.textTitle}>Terms & Condition</Text>
          </View>
          <MaterialCommunityIcons
            name="text-box-check-outline"
            size={24}
            color={"black"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("PrivacyPolicy")}
          style={styles.profileSectionSingleLine}
        >
          <View>
            <Text style={styles.textTitle}>Privacy policies</Text>
          </View>
          <MaterialIcons name="policy" size={24} color={"black"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("DeliveryAndReturn")}
          style={styles.profileSectionSingleLine}
        >
          <View>
            <Text style={styles.textTitle}>Rate the app</Text>
          </View>
          <Feather name="star" size={24} color={"black"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  stickyHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    zIndex: 1,
    paddingBottom: 10,
  },
  profile: {
    fontSize: 28,
    marginHorizontal: "auto",
    fontWeight: "800",
  },
  profileContainer: {
    padding: 20,
    marginTop: 80,
  },
  profileSectionDoubleLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },
  profileSectionSingleLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  textSubTitle: {
    color: "#868D94",
  },
  userName: {
    fontSize: 28,
    fontWeight: "600",
  },
  userEmail: {
    color: "#868D94",
    fontSize: 16,
  },
});
