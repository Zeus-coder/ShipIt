import { View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "@/components/button";
import Input from "@/components/input";
import * as Animatable from "react-native-animatable";
import { useState } from "react";
import { AnimatedIntro } from "@/components/AnimatedIntro";
import { BottomLoginSheet } from "@/components/BottomLoginSheet";
const Page = () => {
  const [value, setValue] = useState("");
  return (
    <View style={styles.container}>
      <AnimatedIntro />
      <Animatable.View animation="fadeInUp" duration={1200} easing={"ease-out"}>
        <BottomLoginSheet />
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Page;
