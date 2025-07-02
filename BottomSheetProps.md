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

# `@gorhom/bottom-sheet` Props Documentation

---

## 📦 Visual & Layout

These props control the look and positioning of your bottom sheet.

| Prop                    | English Description                                                                                   | বাংলা ব্যাখ্যা                                                                                                         |
| :---------------------- | :---------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| `overrideReduceMotion`  | If you want animations to run even when "Reduce Motion" is enabled in system settings, use this prop. | সিস্টেম সেটিংসে "Reduce Motion" চালু থাকলেও অ্যানিমেশন চালাতে চাইলে এই প্রপটি ব্যবহার করুন।                            |
| `backgroundStyle`       | Customize the style of the sheet's background.                                                        | আপনার বটমশীটের ব্যাকগ্রাউন্ডের স্টাইল পরিবর্তন করুন।                                                                   |
| `handleStyle`           | Apply custom styles to the container of the drag handle.                                              | ড্র্যাগ হ্যান্ডেলের কনটেইনারের জন্য কাস্টম স্টাইল যোগ করুন।                                                            |
| `handleIndicatorStyle`  | Style the small drag bar (handle indicator) at the top of the sheet.                                  | বটমশীটের উপরের ছোট ড্র্যাগ বারটির (হ্যান্ডেল ইন্ডিকেটর) স্টাইল পরিবর্তন করুন।                                          |
| `handleHeight`          | Manually set the height of the drag handle.                                                           | ড্র্যাগ হ্যান্ডেলের উচ্চতা ম্যানুয়ালি সেট করুন।                                                                       |
| `containerHeight`       | Manually set the total height of the bottom sheet.                                                    | বটমশীটের মোট উচ্চতা ম্যানুয়ালি সেট করুন।                                                                              |
| `contentHeight`         | This read-only prop gives you the internal height of the sheet's content area.                        | এই শুধুমাত্র-পঠনযোগ্য প্রপটি আপনাকে বটমশীটের ভেতরের কনটেন্ট এলাকার উচ্চতা দেখায়।                                       |
| `containerOffset`       | If your sheet is "detached" (not full-width), use this to add vertical spacing from the edges.        | যদি আপনার শীটটি "detached" (সম্পূর্ণ প্রস্থ না হয়) হয়, তবে প্রান্ত থেকে উল্লম্ব স্পেস যোগ করতে এটি ব্যবহার করুন।     |
| `topInset`              | Add space from the top edge of the screen, considering safe areas (e.g., notches).                    | স্ক্রিনের উপরের দিক থেকে স্পেস যোগ করুন, সেফ এরিয়া (যেমন, নচ) বিবেচনা করে।                                            |
| `bottomInset`           | Add space from the bottom edge of the screen, considering safe areas.                                 | স্ক্রিনের নিচের দিক থেকে স্পেস যোগ করুন, সেফ এরিয়া বিবেচনা করে।                                                       |
| `maxDynamicContentSize` | When using dynamic sizing for your content, this sets the maximum height it can expand to.            | আপনার কনটেন্টের জন্য ডাইনামিক সাইজিং ব্যবহার করার সময়, এটি সর্বোচ্চ উচ্চতা নির্ধারণ করে যেখানে এটি প্রসারিত হতে পারে। |

---

## 🎹 Keyboard Configuration

These props help you manage how the bottom sheet interacts with the keyboard.

| Prop                          | English Description                                                                | বাংলা ব্যাখ্যা                                                                         |
| :---------------------------- | :--------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------- |
| `keyboardBehavior`            | Define how the bottom sheet should react when the soft keyboard appears or hides.  | সফট কীবোর্ড দেখা দিলে বা লুকানো হলে বটমশীট কীভাবে আচরণ করে তা নির্ধারণ করুন।           |
| `keyboardBlurBehavior`        | Controls whether the keyboard should dismiss when the sheet is dragged.            | শীটটি ড্র্যাগ করার সময় কীবোর্ড বন্ধ হবে কিনা তা নিয়ন্ত্রণ করে।                       |
| `enableBlurKeyboardOnGesture` | If `true`, the keyboard will dismiss when a gesture is performed on the sheet.     | যদি `true` হয়, তাহলে শীটে একটি জেসচার (gesture) পারফর্ম করা হলে কীবোর্ড বন্ধ হয়ে যাবে। |
| `android_keyboardInputMode`   | On Android, configure the keyboard input mode (e.g., `adjustPan`, `adjustResize`). | অ্যান্ড্রয়েডে, কীবোর্ড ইনপুট মোড কনফিগার করুন (যেমন, `adjustPan`, `adjustResize`)।    |

---

## 🌀 Animation Configuration

Customize the animations of your bottom sheet.

| Prop                          | English Description                                       | বাংলা ব্যাখ্যা                                                   |
| :---------------------------- | :-------------------------------------------------------- | :--------------------------------------------------------------- |
| `animationConfigs`            | Provide custom spring or timing animation configurations. | কাস্টম স্প্রিং বা টাইমিং অ্যানিমেশন কনফিগারেশন যোগ করুন।         |
| `useBottomSheetSpringConfigs` | Use this hook to apply spring animation configurations.   | স্প্রিং অ্যানিমেশন কনফিগারেশন প্রয়োগ করতে এই হুকটি ব্যবহার করুন। |
| `useBottomSheetTimingConfigs` | Use this hook to apply timing animation configurations.   | টাইমিং অ্যানিমেশন কনফিগারেশন প্রয়োগ করতে এই হুকটি ব্যবহার করুন।  |

---

## ✋ Gesture Configuration

These props allow you to fine-tune how gestures interact with the bottom sheet.

| Prop                        | English Description                                                                              | বাংলা ব্যাখ্যা                                                                                             |
| :-------------------------- | :----------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------- |
| `waitFor`                   | Make the bottom sheet wait for another gesture to complete before its own gesture activates.     | অন্য একটি জেসচার শেষ হওয়ার জন্য বটমশীটকে অপেক্ষা করান তার নিজের জেসচার সক্রিয় হওয়ার আগে।                   |
| `simultaneousHandlers`      | Allow multiple gestures to be active on the sheet at the same time.                              | শীটে একই সময়ে একাধিক জেসচার সক্রিয় হতে দিন।                                                              |
| `activeOffsetX/Y`           | Set the minimum horizontal (`X`) or vertical (`Y`) drag distance required to activate a gesture. | একটি জেসচার সক্রিয় করার জন্য প্রয়োজনীয় ন্যূনতম অনুভূমিক (`X`) বা উল্লম্ব (`Y`) ড্র্যাগ দূরত্ব সেট করুন। |
| `failOffsetX/Y`             | If the drag exceeds this horizontal (`X`) or vertical (`Y`) distance, the gesture will fail.     | যদি ড্র্যাগ এই অনুভূমিক (`X`) বা উল্লম্ব (`Y`) দূরত্ব অতিক্রম করে, তাহলে জেসচারটি ব্যর্থ হবে।              |
| `gestureEventsHandlersHook` | Provide a custom hook for handling gesture events.                                               | জেসচার ইভেন্টগুলি পরিচালনা করার জন্য একটি কাস্টম হুক সরবরাহ করুন।                                          |

---

## 🧠 Reanimated Shared Values

These props expose Reanimated shared values for advanced animation and interaction.

| Prop               | English Description                                                                          | বাংলা ব্যাখ্যা                                                                        |
| :----------------- | :------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| `animatedIndex`    | A shared value that reflects the current snap index of the bottom sheet.                     | একটি শেয়ার্ড ভ্যালু যা বটমশীটের বর্তমান স্ন্যাপ ইনডেক্স নির্দেশ করে।                 |
| `animatedPosition` | A shared value that provides the current height of the bottom sheet in pixels, in real-time. | একটি শেয়ার্ড ভ্যালু যা রিয়েল-টাইমে পিক্সেল এককে বটমশীটের বর্তমান উচ্চতা সরবরাহ করে। |

---

## 🔁 Callbacks

These props provide functions that are called during specific events.

| Prop        | English Description                                                                        | বাংলা ব্যাখ্যা                                                                      |
| :---------- | :----------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| `onChange`  | This function is called whenever the snap index of the sheet changes.                      | শীটের স্ন্যাপ ইনডেক্স পরিবর্তন হলে এই ফাংশনটি কল করা হয়।                           |
| `onAnimate` | This function is called continuously while the sheet is transitioning between snap points. | শীটটি স্ন্যাপ পয়েন্টগুলির মধ্যে ট্রানজিশন করার সময় এই ফাংশনটি ক্রমাগত কল করা হয়। |

---

## 🧩 Custom Components

These props allow you to replace default components with your own custom designs.

| Prop                  | English Description                                                                    | বাংলা ব্যাখ্যা                                                            |
| :-------------------- | :------------------------------------------------------------------------------------- | :------------------------------------------------------------------------ |
| `handleComponent`     | Provide your own custom component for the drag handle.                                 | ড্র্যাগ হ্যান্ডেলের জন্য আপনার নিজের কাস্টম কম্পোনেন্ট সরবরাহ করুন।       |
| `backdropComponent`   | Use a custom component for the overlay that appears behind the sheet.                  | শীটের পিছনে প্রদর্শিত ওভারলে-এর জন্য একটি কাস্টম কম্পোনেন্ট ব্যবহার করুন। |
| `backgroundComponent` | Design your own custom background for the sheet itself.                                | শীটের নিজস্ব ব্যাকগ্রাউন্ডের জন্য আপনার নিজের কাস্টম ডিজাইন করুন।         |
| `footerComponent`     | Add any custom content to the footer area of the bottom sheet.                         | বটমশীটের ফুটারে যেকোনো কাস্টম কনটেন্ট যোগ করুন।                           |
| `children`            | This is where you put the main content that will be displayed inside the bottom sheet. | এখানেই আপনি আপনার মূল কনটেন্ট রাখবেন যা বটমশীটের ভিতরে প্রদর্শিত হবে।     |
