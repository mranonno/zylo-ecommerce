import Toast from "react-native-root-toast";

export const showToast = (message, color) => {
  Toast.show(message, {
    duration: Toast.durations.SHORT,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    backgroundColor: color || null,
    textStyle: {
      color: "white",
      fontSize: 16,
    },
  });
};
