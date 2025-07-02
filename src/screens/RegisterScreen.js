import BottomSheet, {
  BottomSheetView,
  useBottomSheet,
} from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";

const RegisterScreen = () => {
  const navigation = useNavigation();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleRegister = () => {
    const { fullName, email, password, confirmPassword } = form;

    if (!fullName || !email || !password || !confirmPassword) {
      return Alert.alert("Missing Info", "Please fill all the fields.");
    }

    if (password !== confirmPassword) {
      return Alert.alert("Password Mismatch", "Passwords do not match.");
    }

    // 🚀 Replace with real API call
    console.log("Register with:", form);
    Alert.alert("Success", "Registration submitted.");

    // navigation.navigate("Login"); // optional auto-navigation
  };

  const bottomSheetRef = useRef(null);
  // | `expand()`           | Opens to the highest snap point  | সবচেয়ে ওপরে নিয়ে যায়       |
  // | `collapse()`         | Shrinks to the lowest snap point | সবচেয়ে নিচে নিয়ে আসে       |
  // | `close()`            | Fully closes the BottomSheet     | একদম লুকিয়ে ফেলে           |
  // | `snapToIndex(index)` | Goes to specific snap index      | নির্দিষ্ট snap index এ যায় |

  const snapPoints = useMemo(() => ["50%"], []);
  // const snapPoints={["CONTENT_HEIGHT"]}  //for dynamic resize according to content
  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView contentContainerStyle={styles.scroll}>
          <Text style={styles.title}>Create Account</Text>

          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={form.fullName}
            onChangeText={(text) => handleChange("fullName", text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={form.email}
            onChangeText={(text) => handleChange("email", text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={form.password}
            onChangeText={(text) => handleChange("password", text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            value={form.confirmPassword}
            onChangeText={(text) => handleChange("confirmPassword", text)}
          />

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.footerLink}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <TouchableOpacity
        style={[styles.button, { marginBottom: 2 }]}
        onPress={() => bottomSheetRef.current?.expand()}
      >
        <Text style={styles.buttonText}>Open Bottom Sheet</Text>
      </TouchableOpacity>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        animateOnMount={true}
        // enableDynamicSizing
        // enableOverDrag={false}
        // enableHandlePanningGesture={false} //Enable or disable down by top bar
        // enableContentPanningGesture={false}   //Enable or disable down by content
        // detached={true}
        // overDragResistanceFactor={6}
        // bottomInset={40} // optional, adds spacing between sheet and screen bottom
        style={{
          marginHorizontal: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 10,
          elevation: 10, // for Android shadow
          borderRadius: 16,
          marginBottom: 20,
        }}
        handleIndicatorStyle
        keyboardBehavior //keyboard: 'interactive', 'extend', 'fillParent'.
        keyboardBlurBehavior //'none' or 'restore' — controls if keyboard should hide on swipe.
        onAnimate
        // animationDuration	Duration (ms) of transition animation.
        // animationConfigs
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 32,
    color: "#222",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
    marginBottom: 16,
    backgroundColor: "#f9f9f9",
  },
  button: {
    backgroundColor: "#e9443d",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
  },
  footerText: {
    color: "#555",
    fontSize: 14,
  },
  footerLink: {
    color: "#e9443d",
    fontWeight: "600",
    fontSize: 14,
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: "center",
  },
});
