import { Colors } from "@/constants/Colors";
import { Dimensions, StyleSheet, View } from "react-native";
import * as Animatable from "react-native-animatable";

export const AnimatedIntro = () => {
  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInDown"
        duration={1200}
        easing={"ease-out"}
        style={{
          width: 250,
          height: 250,
          backgroundColor: Colors.morelighterprimaryColor,
          borderRadius: 200,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: -30,
          left: -25,
        }}
      />
            <Animatable.View
        animation="fadeInDown"
        duration={1200}
        easing={"ease-out"}
        style={{
          width: 250,
          height: 250,
          backgroundColor: Colors.lightprimaryColor,
          borderRadius: 200,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: -50,
          left: -25,
        }}
      />
      <View>
        <Animatable.Image
          animation="bounceIn"
          duration={4500}
          easing={"ease-out"}
          source={require("../assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Animatable.View
        animation="fadeInUp"
        duration={1200}
        easing={"ease-out"}
        style={{
          width: 250,
          height: 250,
          backgroundColor: Colors.lightprimaryColor,
          borderRadius: 200,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: -50,
          right: -25,
        }}
      />
            <Animatable.View
        animation="fadeInUp"
        duration={1200}
        easing={"ease-out"}
        style={{
          width: 250,
          height: 250,
          backgroundColor: Colors.primaryColor,
          borderRadius: 200,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: -30,
          right: -25,
        }}
      />
    </View>
  );
};

const { height } = Dimensions.get("screen");
const height_logo = height * 0.48;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: height_logo,
    height: height_logo,
  },
});
