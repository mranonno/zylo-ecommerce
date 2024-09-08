import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const CategoriesViewsScreen = ({ route }) => {
  const navigation = useNavigation();
  const category = route.params;
  console.log("category", JSON.stringify(category, null, 1));
  useEffect(() => {
    navigation.setOptions({ headerTitle: category });
  }, [navigation, category]);
  return (
    <View>
      <Text>CategoriesViewsScreen</Text>
    </View>
  );
};

export default CategoriesViewsScreen;

const styles = StyleSheet.create({});
