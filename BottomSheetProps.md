# @gorhom/bottom-sheet Props Documentation (English & Bangla)

## 📦 Visual & Layout

| Prop                    | English Description                        | বাংলা ব্যাখ্যা                            |
| ----------------------- | ------------------------------------------ | ----------------------------------------- |
| `overrideReduceMotion`  | Disable 'Reduce Motion' setting animations | Reduce Motion অন থাকলেও অ্যানিমেশন চালাবে |
| `backgroundStyle`       | Customize sheet background                 | BottomSheet ব্যাকগ্রাউন্ড কাস্টমাইজ       |
| `handleStyle`           | Style for handle container                 | হ্যান্ডেল কনটেইনার স্টাইল                 |
| `handleIndicatorStyle`  | Small drag bar styling                     | ছোট হ্যান্ডেল বার স্টাইল                  |
| `handleHeight`          | Set height of handle                       | হ্যান্ডেল উচ্চতা                          |
| `containerHeight`       | Manually set sheet height                  | BottomSheet মোট উচ্চতা                    |
| `contentHeight`         | Internal content height (read-only)        | ভিতরের কনটেন্ট এরিয়া উচ্চতা               |
| `containerOffset`       | Vertical offset for detached sheet         | Detached হলে উপরে-নিচে সরানো              |
| `topInset`              | Space from top (safe area)                 | স্ক্রিনের উপরের মার্জিন                   |
| `bottomInset`           | Space from bottom (safe area)              | নিচ থেকে মার্জিন                          |
| `maxDynamicContentSize` | Max height for dynamic sizing              | সর্বোচ্চ কনটেন্ট সাইজ নির্ধারণ            |

## 🎹 Keyboard Configuration

| Prop                          | English Description                                 | বাংলা ব্যাখ্যা                          |
| ----------------------------- | --------------------------------------------------- | --------------------------------------- |
| `keyboardBehavior`            | How sheet behaves with keyboard                     | কীবোর্ড এলে BottomSheet কীভাবে আচরণ করে |
| `keyboardBlurBehavior`        | Should keyboard dismiss on drag                     | ড্র্যাগ করলে কীবোর্ড বন্ধ হবে কিনা      |
| `enableBlurKeyboardOnGesture` | Dismiss keyboard on dragging                        | Gesture দিলে কীবোর্ড বন্ধ হবে           |
| `android_keyboardInputMode`   | Android keyboard mode (`adjustPan`, `adjustResize`) | Android কীবোর্ড Input Mode              |

## 🌀 Animation Configuration

| Prop                          | English Description                   | বাংলা ব্যাখ্যা                  |
| ----------------------------- | ------------------------------------- | ------------------------------- |
| `animationConfigs`            | Custom spring/timing animation config | অ্যানিমেশন স্প্রিং/টাইমিং কনফিগ |
| `useBottomSheetSpringConfigs` | Hook for spring animation             | স্প্রিং অ্যানিমেশন কনফিগার হুক  |
| `useBottomSheetTimingConfigs` | Hook for timing animation             | টাইমিং অ্যানিমেশন কনফিগার হুক   |

## ✋ Gesture Configuration

| Prop                        | English Description                     | বাংলা ব্যাখ্যা                          |
| --------------------------- | --------------------------------------- | --------------------------------------- |
| `waitFor`                   | Wait for another gesture                | অন্য Gesture এর জন্য অপেক্ষা            |
| `simultaneousHandlers`      | Allow multiple gestures together        | একাধিক Gesture একসাথে                   |
| `activeOffsetX/Y`           | Minimum drag distance to activate (X/Y) | কতদূর সোয়াইপ করলে gesture অ্যাক্টিভ হবে |
| `failOffsetX/Y`             | Exceeding this cancels gesture (X/Y)    | এই সীমা ছাড়িয়ে গেলে gesture ব্যর্থ হবে  |
| `gestureEventsHandlersHook` | Custom gesture handler hook             | gesture ইভেন্ট কাস্টম হুক               |

## 🧠 Reanimated Shared Values

| Prop               | English Description                 | বাংলা ব্যাখ্যা                   |
| ------------------ | ----------------------------------- | -------------------------------- |
| `animatedIndex`    | Shared value of current snap index  | BottomSheet কোন অবস্থানে আছে     |
| `animatedPosition` | Shared value of current height (px) | BottomSheet এর উচ্চতা রিয়েলটাইমে |

## 🔁 Callbacks

| Prop        | English Description                | বাংলা ব্যাখ্যা           |
| ----------- | ---------------------------------- | ------------------------ |
| `onChange`  | Called when snap index changes     | অবস্থান পরিবর্তনে কল হয়  |
| `onAnimate` | Called during transition animation | অ্যানিমেশন চলাকালে কল হয় |

## 🧩 Custom Components

| Prop                  | English Description                        | বাংলা ব্যাখ্যা                      |
| --------------------- | ------------------------------------------ | ----------------------------------- |
| `handleComponent`     | Custom drag handle component               | নিজের ডিজাইন করা হ্যান্ডেল          |
| `backdropComponent`   | Custom background overlay behind the sheet | Sheet এর পিছনের ব্যাকড্রপ কাস্টমাইজ |
| `backgroundComponent` | Background design of the sheet             | Sheet-এর ভিতরের ব্যাকগ্রাউন্ড       |
| `footerComponent`     | Footer content of the BottomSheet          | নিচের অংশে যেকোনো কনটেন্ট           |
| `children`            | Main body content of the BottomSheet       | BottomSheet-এর ভিতরের মূল কনটেন্ট   |
